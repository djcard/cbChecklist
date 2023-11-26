component extends="coldbox.system.restHandler" {

	property name="qb"          inject="provider:QueryBuilder@qb";
	property name="clientCode"  inject="coldbox:setting:clientCode";
	property name="appCode"     inject="coldbox:setting:appCode";
	property name="goalService" inject="goals@cbChecklist";

	void function show( event, rc, prc ){
		prc.response.setData( goalService.allGoalsForChecklist( rc.checklistuuid ) );
	}

	function save( event, rc, prc ){
		arguments.rc[ "item" ][ "appCode" ]    = appCode;
		arguments.rc[ "item" ][ "clientCode" ] = clientCode;
		var itemid                             = rc.item.keyExists( "id" ) ? rc.item.id : 0;
		arguments.rc.item.delete( "isDirty" );
		arguments.rc.item.delete( "id" );
		arguments.rc.item[ "active" ] = rc.item.keyExists( "active" ) && isValid( "numeric", rc.item.active ) ? rc.item.active : 1;

		qb.from( "checklistGoals" )
			.when(
				itemid,
				function( q ){
					q.where( "id", itemid ).update( values = rc.item, options = { datasource : "packaging" } );
				},
				function( q ){
					q.insert( values = rc.item, options = { datasource : "packaging" } );
				}
			);
		prc.response.setData( goalService.allGoalsForChecklist( rc.item.checklistuuid ) );
	};

}
