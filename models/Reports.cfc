component {

	property name="checklistService" inject="checklists@cbChecklist";
	property name="mergeDOCXtoPDF"   inject="mergeDOCXtoPDF@adobePDFRest";
	property name="targetService"    inject="targets@cbChecklist";
	property name="resultService"    inject="results@cbChecklist";
	property name="clientCode"       inject="coldbox:moduleSettings:cbChecklist:clientCode";
	property name="appCode"          inject="coldbox:moduleSettings:cbChecklist:appCode";

	function createReport( checklistUUID ){
		var checkListDetails = checklistService.checklists( checklistUUID )[ 1 ];
		var targets          = targetService.allTargetsForChecklist( checklistuuid );
		var results          = resultService.results( "", clientCode, checklistuuid );
		var resultsDict      = createFlattenedResultsDictionary( results );

		var mergeData = {
			"title"       : checkListDetails.name,
			"description" : checkListDetails.description,
			"createdOn"   : dateFormat( now(), "yyyy MMM dd" ),
			"data"        : createNodes( targets, 0, resultsDict )
		};

		var fileName = checkListDetails.name.replace( " ", "_", "all" ) & dateTimeFormat(
			now(),
			"yyyy_mm_dd_HH_nn"
		) & ".pdf";

		var pdfResult = mergeDOCXtoPDF.run(
			mergeData,
			"/reportTemplates/ChecklistReport.docx",
			"/reports/#filename#"
		);
		pdfResult[ "localfilename" ] = filename;
		return pdfResult;
	}

	function createNodes( allTargets, parent, results, indent = 0 ){
		var indentStr = "";
		if ( arguments.indent ) {
			for ( var x = 0; x <= arguments.indent * 4; x = x + 1 ) {
				indentStr = indentStr & chr( 32 );
			}
		}
		var retme = [];
		var count = 0;
		allTargets.each( function( target, idx ){
			if ( target.parentid == parent ) {
				count         = count + 1;
				target.result = results.keyExists( target.id ) && results[ target.id ] == 1 ? "Done" : "";
				retme.append( {
					"targetid" : indentStr & count & ". " & target.targetid,
					"result"   : target.result
				} );
				retme.append( createNodes( allTargets, target.id, results, indent + 1 ), true );
			}
		} );
		return retme;
	}

	function createResultsDictionary( data ){
		var retme = {};
		data.each( function( item ){
			retme[ item.targetid ]                = retme.keyExists( item.targetid ) ? retme[ item.targetid ] : {};
			retme[ item.targetid ][ item.goalid ] = item.result;
		} );

		return retme;
	}

	function createFlattenedResultsDictionary( data ){
		var retme = {};
		data.each( function( item ){
			retme[ item.targetid ] = retme.keyExists( item.targetid ) ? retme[ item.targetid ] : item.result
		} );

		return retme;
	}

}
