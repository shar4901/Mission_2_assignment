using Microsoft.AspNetCore.Mvc;
using Mission_2_assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2_assignment.Models
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Form()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Form(GradeFormModel gradeResult)
        {
            return View();
        }
    }
}
