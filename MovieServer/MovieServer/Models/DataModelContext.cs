using MovieServer.Models.Object;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace MovieServer.Models
{
    public class DataModelContext : DbContext 
    {
        private const string _contextName = "DataModelContext";
        public static string ContextName { get { return _contextName; } }

        public DataModelContext() : base(ContextName)
        {
            Configuration.LazyLoadingEnabled = false;
            Configuration.ProxyCreationEnabled = false;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

        }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Column> Columns { get; set; }
        
    }

}