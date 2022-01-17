using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2_assignment.Models
{
    public class GradeFormModel
    {
        [Required]
        [Range(0, 100)]
        public float Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public float Group_Projects { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public float Exames { get; set; }
        [Required]
        [Range(0,100)]
        public float INTEX { get; set; }

    }
}
