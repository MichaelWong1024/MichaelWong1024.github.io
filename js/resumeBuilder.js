/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
    name: "Mingzheng (Michael) Huang",
    role: "A Problem Solver seeking his first internship",
    contacts: {
        '<i class="fas fa-mobile-alt"></i>': '<a href="tel:+19294002904">(929) 400-2904</a>',
        '<i class="fas fa-envelope"></i>': '<a href="mailto:mingzheng.huang1024@gmail.com">mingzheng.huang1024@gmail.com</a>',
        '<i class="fab fa-github"></i>': '<a href="https://github.com/MichaelWong1024">GitHub</a>',
        '<i class="fab fa-linkedin"></i>': '<a href="https://www.linkedin.com/in/mhuang-tech/">LinkedIn</a>',
        '<i class="fas fa-home"></i>': '<a href="https://cse.gatech.edu/">756 W Peachtree St NW, Atlanta, GA 30308</a>',
    },
    welcomeMessage: "Master's student at Georgia Tech focusing on problem-solving.",
    skills: ["Java", "Python", "C/C++", "HTML", "CSS", "JavaScript", "Spring Boot", "REST API"],
    biopic: "images/me.jpg", // You should replace "images/fry.jpg" with the actual path to your picture.
    display: function() {
        // Code to display the bio goes here
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        
        // var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        // var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        // var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        // var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['<i class="fas fa-mobile-alt"></i>']);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts['<i class="fas fa-envelope"></i>']);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts['<i class="fab fa-github"></i>']);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts['<i class="fas fa-home"></i>']);
        
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        
        $("#header").append(formattedBioPic, formattedWelcomeMsg);
        
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

// Calling the display function to populate the bio section in the HTML
bio.display();

var education = {
    "schools": [
        {
            "name": "Georgia Institute of Technology, College of Computing",
            "location": "Atlanta, Georgia",
            "degree": "Master of Science in Computer Science (M.S. CS)",
            "majors": ["Computer Science"],
            "dates": "Aug.2023 – Dec.2024 (Expected)",
            "url": "https://www.cc.gatech.edu/"
        },
        {
            "name": "University College Dublin, College of Engineering",
            "location": "Dublin, Ireland",
            "degree": "Bachelor of Engineering (BE)",
            "majors": ["Engineering"],
            "dates": "Aug.2018 - May.2022",
            "url": "https://www.ucd.ie/engineering/"
        }
    ],
    "onlineCourses": [
        // You can add online courses here
    ],
    "display": function() {
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            
            var formattedSchoolName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            
            $('.education-entry:last').append(formattedSchoolNameDegree);
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
            
            school.majors.forEach(function(major) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
            });
        });
        
        // Code for displaying online courses can be added here
    }
};

education.display();

var work = {
    jobs: [
        {
            employer: "Monash University",
            title: "Research Assistant",
            location: "Hybrid",
            dates: "2020 - 2021",
            description: "Participated in two major projects: " +
                         "1. Analytical Exploration of High-Dimensional Urban Subterranean Space Data via a City Information Modeling (CIM) Platform. " +
                         "2. Algorithmic Examination through Computational Simulation: Assessing the Topological Parameters of Grain Membranes within Heterogeneous Porous Media. " +
                         "Utilized MATLAB for various computational and analytical tasks."
        },
        // Add more jobs here as needed
    ],
    display: function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

// Call the display function to add the work experiences to the resume
work.display();

var projects = {
    projects: [
        {
            title: "Development of Desktop OpenStreetMap Route Planner",
            dates: "Date", // specify the dates here
            description: "Developed a route planning tool using C++ and A* algorithm with OSM data, capable of running both in a terminal and on a virtual desktop, achieving a 15% improvement in route generation time; Enhanced user experience through integrating the visualization library IO2D for interactive route selection and graphical display of paths.",
            images: [] // add any image URLs here if available
        },
        {
            title: "Backend Development for a Used Car Website",
            dates: "Date", // specify the dates here
            description: "Engineered a robust Spring Boot backend managed by Maven; integrated REST APIs for efficient vehicle data and pricing management; and an HTTP client for location services, enhancing data retrieval speed by 10%; Strengthened API management and data retrieval through CRUD operations; employed Swagger for comprehensive API documentation and JUnit testing.",
            images: [] // add any image URLs here if available
        },
        // you can continue adding more projects here...
    ],
    display: function() {
        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

// Call the display function to add the projects to the resume
projects.display();

$('#mapDiv').append(googleMap);

// Logging the click locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    console.log("x location: " + x + "; y location: " + y);
});
