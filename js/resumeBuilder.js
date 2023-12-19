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
            employer: '<a href="https://www.monash.edu">Monash University',
            title: "Research Assistant",
            location: "Hybrid",
            dates: "2020 - 2021",
            description: "Project: Fluid Flow Analysis Platform (Published Paper)<br>" +
                         "<strong>Key Achievements and Responsibilities:</strong><br>" +
                         "• Developed a C# web application with ASP.NET, incorporating numerical algorithms to analyze geotechnical XML data obtained through the 3rd-party Revit API, specifically for porous rock analysis.<br>" +
                         "• Optimized backend performance through multi-threading to improve backend performance by more than 10%.<br>" +
                         "• Utilized mutex and semaphore to avoid race conditions in multithreading environments for robust data processing.<br>" +
                         "• Used React to create a dynamic interface, allowing users to select parameters and navigate through geological structures for further fluid flow path visualization."
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
            title: "Pigeon Location Tracking System",
            dates: "Date", // specify the dates here
            description:
            "• Enabled users to monitor pigeon locations via footbands. Users can create an account and link their footbands to register for new pigeons.<br>" +
            "• Developed a pigeon real-time location tracking system tool in C++ and improved update latency by 15%.<br>" +
            "• Implemented JWT (JSON Web Token) for secure user authentication and content personalization.<br>" +
            "• Developed and refactored a React-based frontend with reusable components to improve code quality and maintainability.<br>" +
            "• Elevated user satisfaction by 20% through A/B testing to refine the pigeon competition tracking experience.<br>" +
            "• Designed a Rest API backend in SpringBoot, integrated with the tracking system, providing users with a robust and low latency response.",
            images: [] // add any image URLs here if available
        },
        {
            title: "Design and Implementation of Venue Booking Database",
            dates: "Date", // specify the dates here
            description:
            "• Developed a responsive booking web application with Flask and Bootstrap, backed by PostgreSQL within virtualenv.<br>" +
            "• Implemented robust backend operations with SQLAlchemy ORM and raw SQL, enhancing data integrity and enabling complex queries.<br>" +
            "• Integrated form validation and full-text search features and reduced 15% server load to improve user experience.",
            images: [] // add any image URLs here if available
        },
        {
            title: "Parallelization and Multithreading of Web Crawler",
            dates: "Date", // specify the dates here
            description: "• Utilized Java’s Concurrency and Jackson JSON Library for parsing configuration files to modernize a web crawler, achieving a 10% improvement in crawling and document processing speed. <br>" +
            "• Employed Java’s Stream API and Lambdas to refactor word-counting algorithms for cleaner, functional programming-compliant code. <br>" +
            "• Built and deployed a custom Java-based profiling tool using Maven and JUnit to validate performance gains, achieving a 15% increase in data capture rates.",
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