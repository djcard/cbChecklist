component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:setting:clientCode";
	property name="appCode"    inject="coldbox:setting:appCode";
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
