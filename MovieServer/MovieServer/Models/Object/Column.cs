using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieServer.Models.Object
{
    public class Column
    {
        public int ID { get; set; }
        public int TableID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }

    }
}