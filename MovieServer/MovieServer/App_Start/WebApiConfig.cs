using Microsoft.Data.Edm;
using MovieServer.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.OData.Batch;
using System.Web.Http.OData.Extensions;

namespace MovieServer
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.EnableCors();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapODataServiceRoute(
                routeName: "odata",
                routePrefix: "odata",
                model: EdmBuilder.GetEdm<DataModelContext>(),
                batchHandler: new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer)
            );
        }
    }
}
