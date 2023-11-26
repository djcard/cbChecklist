component {

	function up( schema, qb ){
		queryExecute( "CREATE TABLE [dbo].[checklistGoals](
            [id] [int] IDENTITY(1,1) NOT NULL,
            [checklistuuid] [nvarchar](35) NULL,
            [label] [nvarchar](20) NULL,
            [active] [int] NULL,
            [appCode] [nvarchar](50) NULL,
            [clientCode] [nvarchar](50) NULL,
            [displayOrder] [int] NULL
        )" );
	}

	function down( schema, qb ){
	}

}
