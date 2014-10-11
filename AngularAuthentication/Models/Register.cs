﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularAuthentication.Models
{
    public class Register
    {
        public string name { get; set; }
        public string password { get; set; }
        public string email { get; set; }
    }

    public class Login
    {
        public string username { get; set; }
        public string upassword { get; set; }
    }
}