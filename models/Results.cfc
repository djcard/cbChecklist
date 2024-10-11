component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:moduleSettings:cbChecklist:clientCode";
	property name="appCode"    inject="coldbox:moduleSettings:cbChecklist:appCode";
	property name="dbaseName"  inject="coldbox:setting:dbaseName@cbChecklist";

	function results( appCode, clientCode, checklistuuid ){
		return qb
			.from( "checklistResults" )
			.andWhere( "clientCode", clientCode )
			.andWhere( "active", 1 )
			.andWhere( "checklistuuid", checklistUUID )
			.get( options = { datasource : dbaseName } );
	}

}
