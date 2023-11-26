component extends="coldbox.system.resthandler" {

	property name="reportService" inject="Reports@cbChecklist";
	function createReport( event, rc, prc ){
		prc.response.setData( reportService.createReport( rc.checklistuuid ) );
	}

}
