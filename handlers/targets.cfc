component extends="coldbox.system.restHandler" {

	property name="qb"            inject="provider:QueryBuilder@qb";
	property name="clientCode"    inject="coldbox:moduleSettings:cbChecklist:clientCode";
	property name="appCode"       inject="coldbox:moduleSettings:cbChecklist:appCode";
	property name="targetService" inject="targets@cbChecklist";

	void function show( event, rc, prc ){
		prc.response.setData( targetService.allTargetsForChecklist( rc.checklistuuid ) );
	}

	function create( event, rc, prc ){
		arguments.rc[ "item" ][ "appCode" ]    = appCode;
		arguments.rc[ "item" ][ "clientCode" ] = clientCode;
		var itemid                             = rc.item.keyExists( "id" ) ? rc.item.id : 0;

		arguments.rc.item[ "active" ] = rc.item.keyExists( "active" ) && isValid( "numeric", rc.item.active ) ? rc.item.active : 1;

		if ( arguments.rc.item.keyExists( "updateOrder" ) && arguments.rc.item.updateOrder ) {
			autoBumpOrder(
				arguments.rc.item.checklistuuid,
				arguments.rc.item.parentid,
				arguments.rc.item.displayOrder
			);
			arguments.rc.item.delete( "updateOrder" );
		}

		arguments.rc.item.delete( "isDirty" );
		arguments.rc.item.delete( "id" );

		qb.from( "checklistTargets" )
			.when(
				isValid( "numeric", itemid ),
				function( q ){
					q.where( "id", itemid ).update( values = rc.item, options = { datasource : "packaging" } );
				},
				function( q ){
					q.insert( values = rc.item, options = { datasource : "packaging" } );
				}
			);
		prc.response.setData( targetService.allTargetsForChecklist( rc.item.checklistuuid ) );
	}

	function autoBumpOrder( checklistuuid, parentid, newOrder ){
		queryExecute( "update checklistTargets 
		set displayOrder = displayOrder + 1
		where clientCode='#clientCode#' 
		and displayOrder >= #newOrder# 
		and checklistuuid='#arguments.checklistuuid#' 
		and parentid=#parentid#" );
	}

}
