﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieServer.Models
{
    public class Movie
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Review { get; set; }
        public string Code { get; set; }

    }
}