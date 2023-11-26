component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:setting:clientCode";
	property name="appCode"    inject="coldbox:setting:appCode";
	property name="dbaseName"  inject="coldbox:setting:dbaseName@cbChecklist";

	function allTargetsForChecklist( required string checklistuuid ){
		return qb
			.from( "checklistTargets" )
			// .where('appCode', appCode)
			.Where( "clientCode", clientCode )
			.andWhere( "active", 1 )
			.andWhere( "checklistUUID", checklistuuid )
			.orderBy( "displayOrder" )
			.orderBy( "testpackage" )
			.get( options = { datasource : dbaseName } );
	}

}
