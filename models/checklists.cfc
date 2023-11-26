component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:setting:clientCode";
	property name="appCode"    inject="coldbox:setting:appCode";
	property name="dbaseName"  inject="coldbox:setting:dbaseName@cbChecklist";

	function checklists( id = "" ){
		return qb
			.from( "checklists" )
			.where( "appCode", appCode )
			.andWhere( "clientCode", clientCode )
			.andWhere( "active", 1 )
			.when( arguments.id.len(), function( q ){
				q.andWhere( "id", id );
			} )
			.get( options = { datasource : dbaseName } );
	}

	function updateChecklist( itemid, item ){
		qb.from( "checklists" )
			.when(
				itemid.len(),
				function( q ){
					q.where( "id", itemid ).update( values = item, options = { datasource : dbaseName } );
				},
				function( q ){
					item.id = createUUID();
					q.insert( values = item, options = { datasource : dbaseName } );
				}
			);
	}

}
