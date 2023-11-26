component extends="coldbox.system.restHandler" {

	property name="qb"               inject="provider:QueryBuilder@qb";
	property name="clientCode"       inject="coldbox:setting:clientCode";
	property name="appCode"          inject="coldbox:setting:appCode";
	property name="checklistService" inject="checklists@cbChecklist";

	// Place your content here
	void function index( event, rc, prc ){
		prc.response.setData( checklistService.checklists() );
	}

	function save( event, rc, prc ){
		arguments.rc.item.appCode    = appCode;
		arguments.rc.item.clientCode = clientCode;
		var itemid                   = rc.item.keyExists( "id" ) ? rc.item.id : "";
		arguments.rc.item.delete( "isDirty" );
		arguments.rc.item.delete( "id" );
		checklistService.updateChecklist( itemid, rc.item );
		prc.response.setData( checklistService.checklists() );
	}

}
