namespace MovieServer.Migrations.MovieServerContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCode : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movies", "Code", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movies", "Code");
        }
    }
}
