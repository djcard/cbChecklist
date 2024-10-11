component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:moduleSettings:cbChecklist:clientCode";
	property name="appCode"    inject="coldbox:moduleSettings:cbChecklist:appCode";
	property name="dbaseName"  inject="coldbox:setting:dbaseName@cbChecklist";

	function allTargetsForChecklist( required string checklistuuid ){
		return qb
			.from( "checklistTargets" )
			.Where( "clientCode", clientCode )
			.andWhere( "active", 1 )
			.andWhere( "checklistUUID", checklistuuid )
			.orderBy( "displayOrder" )
			.orderBy( "id" )
			.get( options = { datasource : dbaseName } );
	}

}
