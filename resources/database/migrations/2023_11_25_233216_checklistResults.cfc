component {

	function up( schema, qb ){
		queryExecute( "CREATE TABLE [dbo].[checklistResults](
        [checklistuuid] [nvarchar](35) NULL,
        [testpackage] [nvarchar](200) NULL,
        [goaluuid] [nvarchar](35) NULL,
        [result] [nvarchar](50) NULL,
        [appCode] [nvarchar](50) NULL,
        [clientCode] [nvarchar](50) NULL,
        [active] [int] NULL
    )" );
	}

	function down( schema, qb ){
	}

}
