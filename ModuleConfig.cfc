component {

	// Module Properties
	this.title              = "cbChecklist";
	this.author             = "";
	this.webURL             = "";
	this.description        = "";
	this.version            = "1.0.0";
	// If true, looks for views in the parent first, if not found, then in the module. Else vice-versa
	this.viewParentLookup   = true;
	// If true, looks for layouts in the parent first, if not found, then in module. Else vice-versa
	this.layoutParentLookup = true;
	// Module Entry Point
	this.entryPoint         = "cbChecklist";
	// Inherit Entry Point
	this.inheritEntryPoint  = false;
	// Model Namespace
	this.modelNamespace     = "cbChecklist";
	// CF Mapping
	this.cfmapping          = "cbChecklist";
	// Auto-map models
	this.autoMapModels      = true;
	// Module Dependencies
	this.dependencies       = [];

	/**
	 * Configure the module
	 */
	function configure(){
		// parent settings
		parentSettings = {};

		// module settings - stored in modules.name.settings
		settings = {
			"dbaseName"  : getSystemSetting( "dBaseName", "" ),
			"appCode"    : getSystemSetting( "appCode", "" ),
			"clientCode" : getSystemSetting( "clientCode", "" )
		};

		// Layout Settings
		layoutSettings = { defaultLayout : "" };

		// Custom Declared Points
		interceptorSettings = { customInterceptionPoints : [] };

		// Custom Declared Interceptors
		interceptors = [];

		// Binder Mappings
		// binder.map("Alias").to("#moduleMapping#.models.MyService");
	}

}
