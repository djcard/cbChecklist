component {

	function up( schema, qb ){
		queryExecute( "CREATE TABLE [dbo].[checklistResults](
        [checklistuuid] [nvarchar](35) NULL,
        [targetid] [nvarchar](200) NULL,
        [goalid] [nvarchar](35) NULL,
        [result] [nvarchar](50) NULL,
        [appCode] [nvarchar](50) NULL,
        [clientCode] [nvarchar](50) NULL,
        [active] [int] NULL
    )" );
	}

	function down( schema, qb ){
	}

}
