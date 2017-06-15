using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using MovieServer.Models;
using MovieServer.Models.Object;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;


namespace MovieServer.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [EnableBreezeQuery]
    [BreezeController]
    public class DataModelController : ApiController
    {
        private readonly EFContextProvider<DataModelContext> _contextProvider = new EFContextProvider<DataModelContext>();

        // ~/breeze/datamodel/Metadata 
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<Table> Tables()
        {
            return _contextProvider.Context.Tables;
        }

        [HttpGet]
        public IQueryable<Column> Columns()
        {
            return _contextProvider.Context.Columns;
        }



        //public bool BeforeSaveEntity(EntityInfo info)
        //{
        //    if (info.EntityState == EntityState.Added && info.Entity is Table)
        //    {

        //        var tbl = (Table)info.Entity;
        //        string connStr = "server=(localdb)\\MSSQLLocalDB;database=DataModelContext";
        //        string stmt = "SELECT MAX(ID) from dbo.[Table] ";

        //        SqlConnection conn = new SqlConnection(connStr);

        //        try
        //        {
        //            int ID = 0;
        //            conn.Open();
        //            SqlCommand myCommand = new SqlCommand(stmt, conn);
        //            if (myCommand.ExecuteScalar() == DBNull.Value)
        //            {
        //                ID = 1;
        //            }
        //            else
        //            {
        //                ID = (int)myCommand.ExecuteScalar();
        //            }                   
        //            tbl.Code = 'A' +ID.ToString();
        //            conn.Close();


        //        }
        //        catch (Exception ex)
        //        {
        //            Console.Write(ex.Message);
        //        }               
        //        info.OriginalValuesMap["Code"] = null;
        //        info.OriginalValuesMap["Temp"] = null; 

        //    }


        //    return true;

        //    //if (== Modified) 
        //}


        protected void AfterSaveEntities(Dictionary<Type, List<EntityInfo>> saveMap, List<KeyMapping> keyMappings)
        {
            foreach (var item in saveMap)
            {
                foreach (var entityItem in item.Value)
                {
                    if (entityItem.Entity is Table && (entityItem.EntityState == EntityState.Added))
                    {

                        var entity = (Table)entityItem.Entity;
                        //var maxCode= _contextProvider.Context.Tables.Max(x => Convert.ToInt32(x.Code));
                        //entity.Code = (maxCode + 1).ToString();
                        entity.Code = entity.ID.ToString();
                        // _contextProvider.Context.Entry(entity).Property(u => u.Code).CurrentValue = entity.ID.ToString();

                    }
                    entityItem.OriginalValuesMap["Code"] = null;
                }
               

            }
            _contextProvider.Context.SaveChanges();

        }

        // ~/breeze/datamodel/SaveChanges
        [HttpPost]
        public SaveResult SaveChanges (JObject saveBundle)
        {
            //  _contextProvider.BeforeSaveEntityDelegate += BeforeSaveEntity;
            _contextProvider.AfterSaveEntitiesDelegate +=AfterSaveEntities;
            return _contextProvider.SaveChanges(saveBundle);
        }

    }
}
