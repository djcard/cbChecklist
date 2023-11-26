component extends="coldbox.system.restHandler" {

	function returnJS( event, rc, prc ){
		event
			.sendFile(
				file = expandPath(
					expandPath( "/cbChecklist" ) & "/" & prc.currentRoute.listFirst( ":" ) & "/" & rc.filename
				),
				name       = rc.fileName,
				mimeType   = "text/javascript",
				extension  = "js",
				deleteFile = false
			)
			.noRender();
	}

}
