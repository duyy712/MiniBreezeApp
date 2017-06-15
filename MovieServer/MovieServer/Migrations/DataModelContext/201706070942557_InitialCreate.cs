namespace MovieServer.Migrations.DataModelContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Column",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        TableID = c.Int(nullable: false),
                        Name = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Table", t => t.TableID, cascadeDelete: true)
                .Index(t => t.TableID);
            
            CreateTable(
                "dbo.Table",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String()                        
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Column", "TableID", "dbo.Table");
            DropIndex("dbo.Column", new[] { "TableID" });
            DropTable("dbo.Table");
            DropTable("dbo.Column");
        }
    }
}
