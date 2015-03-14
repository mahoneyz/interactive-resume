var bio = {
	"name" : "James Mahoney",
	"role" : "Applications Developer",
	"contacts": {
		"mobile": "440-364-6053",
		"email": "mahoneyz@ameritech.net",
		"github": "mahoneyz",
		"location": "Cleveland, Ohio"
	},
	"WelcomeMessage" : "Hello, Welcome to my Resume.",
	"skills" : [ "Automating Solutions", "Creating Websites", "Coding Winbatch"],
	"bioPic": "images/cle.jpg"
}

var education = {
 "schools": [
	{
	"name": "Community College of the Air Force",
	"degree": "AAS",
	"dates": "1994",
	"location": "Goldsboro, North Carolina",
	"major": "Electronics Systems Technology"
	},
	{
	"name": "North High School",
	"degree": "HS",
	"dates": "1985",
	"location": "Eastlake, Ohio",
	"major": "General Studies"
	}
	],
	"onlineCourses": [
	{
	"title": "Javascript Basics",
	"school": "Udacity",
	"dates": "2015",
	"location": "Cyberspace",
	"url" : "http://www.udacity.com/course/ud804"
	}
	]
}

var work = {
	"jobs": [
	{
	"employer" : "AT&T",
	"title" : "Applications Developer",
	"location" : "Cleveland, Ohio",
	"dates" : "2001-present",
	"description" : "Started as a Telecom Specialist Tester in the Special Services Test Center, Cleveland Ohio.  Promoted to management in 2006 as a Systems Manager.	In 2014 Promoted to Professional Applications Developer.  Responsible for automating solutions for internal clients.",
	},
	{
	"employer" : "Quadrel Labeling Systems",
	"title" : "Field Service Technician",
	"location" : "Mentor, Ohio",
	"dates" : "2000-2001",
	"description" : "As a Field Service Technican was resonsible for installing and mainntaining lableing equipment."
	}
	]
}

var projects = {
	"projects" : [
	{
	"title" : "Capital Management Website",
	"dates" : "2014-present",
	"description" : "Website that interfaces with Microsoft SQL database and displays data and allows users to update it",
	"image": "images/cle.jpg"
	},
	{
	"title" : "Missed Appointments",
	"dates" : "2009-present",
	"description" : "Application used to notify customers when a scheduled appointment is going to be missed.  Utilizes a combination of Winbatch scripts, and websites using HTML, Coldfusion, javascript, and SQL",
	"image": "images/cle.jpg"
	}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%',bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
	$("#header").append(formattedRole);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	//var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var Contactinfo = formattedMobile + formattedemail + formattedgithub + formattedLocation;
	$("#header").append(Contactinfo);
	$("#footerContacts").append(Contactinfo);

	var mypic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(mypic);

	var mymsg = HTMLWelcomeMsg.replace("%data%",bio.WelcomeMessage);
	$("#header").append(mymsg);
}
bio.display();

projects.display = function() {
	for (projectNum in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectNum].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[projectNum].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectNum].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectNum].image);
		$(".project-entry:last").append(formattedImage);

	}
}
projects.display();

work.display = function() {
	for (itemnum in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = work.jobs[itemnum].employer;



		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[itemnum].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[itemnum].title);
		var formattedTitleandEmployer = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedTitleandEmployer);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[itemnum].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[itemnum].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[itemnum].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

$("#main").append(internationalizeButton);

function inName(name) {
	//alert(name);
	var namearray = name.split(" ");
	var fname = namearray[0];
	var lname = namearray[1];
	fletter = fname.slice(0,1).toUpperCase();
	fname = fname.slice(1).toLowerCase();
	fname = fletter + fname;
	lname = lname.toUpperCase();
	intName = fname + " " + lname;
	return intName;
}

if (bio.skills.length >0) {
	$("#header").append(HTMLskillsStart);
	for (itemnum in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[itemnum]);
		$("#skills").append(formattedSkill);
	}
}
education.display = function() {
	for (itemnum in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedname = HTMLschoolName.replace("%data%", education.schools[itemnum].name);
		$(".education-entry:last").append(formattedname);
		var formatteddates = HTMLschoolDates.replace("%data%", education.schools[itemnum].dates);
		$(".education-entry:last").append(formatteddates);
		var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[itemnum].degree);
		$(".education-entry:last").append(formatteddegree);
		var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[itemnum].location);
		$(".education-entry:last").append(formattedlocation);
		var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[itemnum].major);
		$(".education-entry:last").append(formattedmajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (itemnum in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[itemnum].title);
		$(".education-entry:last").append(formattedtitle);
		var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[itemnum].school);
		$(".education-entry:last").append(formattedschool);
		var formatteddates = HTMLonlineDates.replace("%data%", education.onlineCourses[itemnum].dates);
		$(".education-entry:last").append(formatteddates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[itemnum].url);
		$(".education-entry:last").append(formattedURL);

	}
}
education.display();
$("#mapDiv").append(googleMap);