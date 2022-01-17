using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2_assignment.Models
{
    public class FanMailModel
    {
        [Required]
        public float Assignments { get; set; }
        public float Group_Projects { get; set; }
        public float Quizzes { get; set; }
        public float Exames { get; set; }
        public float INTEX { get; set; }





    }
}
