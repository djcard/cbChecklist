component extends="coldbox.system.restHandler" {

	property name="qb"            inject="provider:QueryBuilder@qb";
	property name="clientCode"    inject="coldbox:setting:clientCode";
	property name="appCode"       inject="coldbox:setting:appCode";
	property name="resultService" inject="Results@cbChecklist";

	void function show( event, rc, prc ){
		prc.response.setData( resultService.results( appCode, clientCode, rc.checklistuuid ) );
	}

	void function create( event, rc, prc ){
		qb.from( "checklistResults" )
			.when(
				resultExists( rc.checklistuuid, rc.target, rc.goal ),
				function( q ){
					q.where( "appCode", appCode )
						.andWhere( "clientCode", clientCode )
						.andWhere( "goaluuid", rc.goal )
						.andWhere( "testpackage", rc.target )
						.andWhere( "checklistuuid", rc.checklistUUID )
						.update( values = { result : rc.result }, options = { datasource : "packaging" } );
				},
				function( q ){
					q.insert(
						values = {
							checklistuuid : rc.checklistuuid,
							goaluuid      : rc.goal,
							testpackage   : rc.target,
							result        : rc.result,
							active        : 1,
							appCode       : appCode,
							clientCode    : clientCode
						},
						options = { datasource : "packaging" }
					);
				}
			);
		prc.response.setData( true );
	}

	function resultExists( checklistuuid, target, goal ){
		return qb
			.from( "checklistResults" )
			.where( "appCode", appCode )
			.andWhere( "clientCode", clientCode )
			.andWhere( "testpackage", target )
			.andWhere( "checklistuuid", checklistUUID )
			.andWhere( "goaluuid", goal )
			.exists( options = { datasource : "packaging" } );
	}

}
