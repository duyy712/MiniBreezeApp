namespace MovieServer.Migrations.MovieServerContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitMovie : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Movies",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Genre = c.String(),
                        Review = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Movies");
        }
    }
}
