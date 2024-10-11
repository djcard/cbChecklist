component {

	property name="qb"         inject="provider:QueryBuilder@qb";
	property name="clientCode" inject="coldbox:moduleSettings:cbChecklist:clientCode";
	property name="appCode"    inject="coldbox:moduleSettings:cbChecklist:appCode";
	property name="dbaseName"  inject="coldbox:moduleSettings:cbChecklist:dbaseName";

	function checklists( id = "" ){
		return qb
			.selectRaw( "c.*,s.label as statusName" )
			.from( "checklists c" )
			.leftJoin( "checklistStatuses s", "c.status", "s.id" )
			.where( "c.appCode", appCode )
			.andWhere( "c.clientCode", clientCode )
			.andWhere( "c.active", 1 )
			.when( arguments.id.len(), function( q ){
				q.andWhere( "c.id", id );
			} )
			.orderBy( "c.displayOrder" )
			.get( options = { datasource : dbaseName } );
	}

	function updateChecklist( itemid, item ){
		if ( item.keyExists( "updateOrder" ) && item.updateOrder ) {
			autoBumpOrder( item.displayOrder );
			item.delete( "updateOrder" );
		}

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

	function autoBumpOrder( newOrder ){
		queryExecute( "update checklists 
		set displayOrder = displayOrder + 1
		where clientCode='#clientCode#' and displayOrder >= #newOrder#" );
	}

}
