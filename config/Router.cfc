component {

	function configure(){
		route( "/" ).withAction( { "GET" : "index", "POST" : "save", "PUT" : "save" } ).toHandler( "checklists" );
		route( "/targets/:checklistuuid" )
			.withAction( { "GET" : "show", "POST" : "create" } )
			.toHandler( "targets" );
		route( "/targets/" ).withAction( { "POST" : "create" } ).toHandler( "targets" );
		route( "/goals/:checklistuuid" ).withAction( { "GET" : "show" } ).toHandler( "goals" );
		route( "/goals" ).withAction( { "POST" : "save" } ).toHandler( "goals" );
		route( "/results/:checklistuuid" )
			.withAction( { "GET" : "show", "POST" : "create" } )
			.toHandler( "results" );
		route( "/report/:checklistuuid" ).withAction( { "GET" : "createReport" } ).tohandler( "report" );
		route( "/views/index/static/js/:filename" ).withAction( { "GET" : "returnJS" } ).toHandler( "react" );
	}

}
