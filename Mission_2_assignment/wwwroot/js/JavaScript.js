////$("#btnsend").click(function () {
////	alert($("#groupProjects").val() + $("#Quizzes").val());
////})


//Grade form math and alert box
$("#btnsend").click(function () {
	const weight = [.05, .10, .20, .10, .55];

	var Assignments = $("#assignments").val();
	Assignments = parseFloat(Assignments);
	Assignments *= weight[4];

	var groupProjects = $("#groupProjects").val();
	groupProjects = parseFloat(groupProjects);
	groupProjects *= weight[0];

	var quizzes = $("#Quizzes").val();
	quizzes = parseFloat(quizzes);
	quizzes *= weight[1];

	var exames = $("#Exames").val();
	exames = parseFloat(exames);
	exames *= weight[2];

	var INTEX = $("#INTEX").val();
	INTEX = parseFloat(INTEX);
	INTEX *= weight[3];

	var total = (groupProjects + quizzes + exames + INTEX + Assignments).toFixed(2)

	var output = "You have a " + total + "% in 413" + "\n" + "If the semester ended today, you would have a/an "

	//You can set the grade scale for a class
	var gradeScale = [94, 90, 87, 84, 80, 77, 74, 70, 67, 64, 60, ]

	if (total >= gradeScale[0]) {
		output += "A";
	}
	else if (total >= gradeScale[1]) {
		output += "A-";
	}
	else if (total >= gradeScale[2]) {
		output += "B+";
	}
	else if (total >= gradeScale[3]) {
		output += "B";
	}
	else if (total >= gradeScale[4]) {
		output += "B-";
	}
	else if (total >= gradeScale[5]) {
		output += "C+";
	}
	else if (total >= gradeScale[6]) {
		output += "C";
	}
	else if (total >= gradeScale[7]) {
		output += "C-";
	}
	else if (total >= gradeScale[8]) {
		output += "D+";
	}
	else if (total >= gradeScale[9]) {
		output += "D";
	}
	else if (total >= gradeScale[10]) {
		output += "D-";
	}
	else if (total <= gradeScale[10]) {
		output += "E";
	}
	else {
		output = "There were invalid inputs"
    }

	//Print alert
	alert(output);
})