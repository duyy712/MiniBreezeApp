namespace MovieServer.Migrations.DataModelContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCode : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Column", "Code", c => c.String());
            AddColumn("dbo.Table", "Code", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Table", "Code");
            DropColumn("dbo.Column", "Code");
        }
    }
}
