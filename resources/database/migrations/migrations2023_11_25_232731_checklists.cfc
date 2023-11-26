component {

	function up( schema, qb ){
		queryExecute( "CREATE TABLE [dbo].[checklists](
            [id] [nvarchar](35) NULL,
            [name] [nvarchar](100) NULL,
            [appCode] [nvarchar](40) NULL,
            [clientCode] [nvarchar](50) NULL,
            [active] [int] NULL,
            [isDeleted] [int] NULL,
            [basedon] [int] NULL,
            [description] [nvarchar](1000) NULL
        )" )
	}

	function down( schema, qb ){
	}

}
