var formattedName = "James Mahoney";
var formattedRole = "Applications Developer";

formattedName = HTMLheaderName.replace('%data%',formattedName);
formattedRole = HTMLheaderRole.replace('%data%',formattedRole);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contact info" : "888-888-8888",
	"Welcome Message" : "Hello, Welcome!",
	"skills" : "ninja"

}

var work = {
	"currentPosition" : "Applications Developer",
	"employer" : "AT&T",
	"years" : 13,
	"city" : "Cleveland",
	}

var education = {
 "schools" : [
	{
	"name": "Community Colllege of the Air Force",
	"degree": "AAS",
	"city": "Goldsboro",
	},
	{
	"name": "North High School",
	"degree": "HS",
	"city": "Eastlake",
	}
  ]
}

$("#header").append(bio.skills);
$("#header").append(work["currentPosition"]);
$("#header").append(education["school"]);


//$("#main").append("James Mahoney");
console.log("FormattedName = " + formattedName);
console.log("formattedRole = " + formattedRole);

