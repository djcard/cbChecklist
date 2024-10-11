component extends="coldbox.system.restHandler" {

	property name="qb"               inject="provider:QueryBuilder@qb";
	property name="clientCode"       inject="coldbox:moduleSettings:cbChecklist:clientCode";
	property name="appCode"          inject="coldbox:moduleSettings:cbChecklist:appCode";
	property name="checklistService" inject="checklists@cbChecklist";

	// Place your content here
	void function index( event, rc, prc ){
		prc.response.setData( checklistService.checklists() );
	}

	function save( event, rc, prc ){
		param rc.item.appCode    = appCode;
		param rc.item.clientCode = clientCode;
		param rc.item.active     = 1;
		param rc.item.isDeleted  = 1;
		var itemid               = rc.item.keyExists( "id" ) && rc.item.id.len() ? rc.item.id : "";
		arguments.rc.item.delete( "isDirty" );
		arguments.rc.item.delete( "id" );
		arguments.rc.item.delete( "statusName" );

		checklistService.updateChecklist( itemid, rc.item );
		prc.response.setData( checklistService.checklists() );
	}

}
