component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:setting:clientCode";
	property name="appCode"    inject="coldbox:setting:appCode";
	property name="dbaseName"  inject="coldbox:setting:dbaseName@cbChecklist";

	function allGoalsForChecklist( checklistuuid ){
		return qb
			.from( "checklistGoals" )
			.where( "appCode", appCode )
			.andWhere( "clientCode", clientCode )
			.andWhere( "active", 1 )
			.andWhere( "checklistUUID", checklistUUID )
			.get( options = { datasource : dbaseName } );
	}

	function saveGoal( item ){
	}

}
