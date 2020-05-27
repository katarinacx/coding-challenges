window.jobs = [{
        company_image: "../images/photosnap.svg",
        company: "Photosnap",
        new: true,
        featured: true,
        title: "Senior Frontend Developer",
        date: "1d ago",
        type: "Full Time",
        location: "USA only",
        tags: [
            "Frontend",
            "Senior",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        company_image: "../images/manage.svg",
        company: "Manage",
        new: true,
        featured: true,
        title: "Fullstack Developer",
        date: "1d ago",
        type: "Part Time",
        location: "Remote",
        tags: [
            "Fullstack",
            "Midweight",
            "Python",
            "React"
        ]
    },
    {
        company_image: "../images/account.svg",
        company: "Account",
        new: true,
        featured: false,
        title: "Junior Frontend Developer",
        date: "2d ago",
        type: "Part Time",
        location: "USA only",
        tags: [
            "Frontend",
            "Junior",
            "React",
            "Sass",
            "JavaScript"
        ]
    },
    {
        company_image: "../images/myhome.svg",
        company: "MyHome",
        new: false,
        featured: false,
        title: "Junior Frontend Developer",
        date: "5d ago",
        type: "Contract",
        location: "USA only",
        tags: [
            "Frontend",
            "Junior",
            "CSS",
            "JavaScript"
        ]
    },
    {
        company_image: "../images/loop-studios.svg",
        company: "Loop Studios",
        new: false,
        featured: false,
        title: "Software Engineer",
        date: "1w ago",
        type: "Full Time",
        location: "Worldwide",
        tags: [
            "Fullstack",
            "Midweight",
            "JavaScript",
            "Sass",
            "Ruby"
        ]
    },
    {
        company_image: "../images/faceit.svg",
        company: "FaceIt",
        new: false,
        featured: false,
        title: "Junior Backend Developer",
        date: "2w ago",
        type: "Full Time",
        location: "UK only",
        tags: [
            "Backend",
            "Junior",
            "Ruby",
            "RoR"
        ]
    },
    {
        company_image: "../images/shortly.svg",
        company: "Shortly",
        new: false,
        featured: false,
        title: "Junior Developer",
        date: "2w ago",
        type: "Full Time",
        location: "Worldwide",
        tags: [
            "Frontend",
            "Junior",
            "HTML",
            "Sass",
            "JavaScript"
        ]
    },
    {
        company_image: "../images/insure.svg",
        company: "Insure",
        new: false,
        featured: false,
        title: "Junior Frontend Developer",
        date: "2w ago",
        type: "Full Time",
        location: "USA only",
        tags: [
            "Frontend",
            "Junior",
            "Vue",
            "JavaScript",
            "Sass"
        ]
    },
    {
        company_image: "../images/eyecam-co.svg",
        company: "Eyecam Co.",
        new: false,
        featured: false,
        title: "Full Stack Engineer",
        date: "3w ago",
        type: "Full Time",
        location: "Worldwide",
        tags: [
            "Fullstack",
            "Midweight",
            "Javascript",
            "Django",
            "Python"
        ]
    },
    {
        company_image: "../images/the-air-filter-company.svg",
        company: "The Air Filter Company",
        new: false,
        featured: false,
        title: "Front-end Dev",
        date: "1mo ago",
        type: "Part Time",
        location: "Worldwide",
        tags: [
            "Frontend",
            "Junior",
            "React",
            "Sass",
            "JavaScript"
        ]
    },
];

window.initialise = function() {
    //Declare variable called listing_html and sets it to the outcome of the function (returns the html)
    var listing_html = buildListingHTML();
    //Calls function and passes in the param
    renderListings(listing_html);
};

function renderListings(listing_html) {
    $('#container').html(listing_html);
}

// Builds and returns the HTML string to be printed to the screen
function buildListingHTML() {
    //Declares variable called html and sets it to an empty string
    var html = "";

    //Loops over the window.jobs array, incrementing i by 1 until it hits the max length of the array
    for (var i = 0; i < window.jobs.length; i++) {
        //Declares a variable called job and sets it to the i index of the window.jobs array (a job object)
        var job = window.jobs[i];

        //Appending the job listing html to the variable we set earlier in the function 
        html += '<div class="row">' +
                    '<div class="col-12">' +
                        '<div class="job-card featured box-shadow">' +
                            '<div class="row no-gutters">' +
                                '<div class="col-12 col-md-5 details">' +
                                    buildCompanyImageHTML(job.company_image) +
                                    buildCompanyHTML(job.company) +
                                    buildPillHTML(job.new, job.featured) +
                                    buildTitleHTML(job.title) +
                                    buildDetailsHTML(job.date, job.type, job.location) +
                                '</div>' +
                                '<hr>' +
                                '<div class="col-12 col-md-7 tags">' +
                                    buildTagsHTML(job.tags) +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    }

    //Returns the html variable 
    return html;
}

function buildCompanyImageHTML(image){
    var html = "<img src=" + image + ">";
    return html;
}

function buildCompanyHTML(company) {
    var html = "<h7>" + company + "</h7>";
    return html;
}

function buildPillHTML(new_pill, featured_pill){
    var html = "";
    if (new_pill === true){
        html += "<span class='pill new'>New!</span>";
    }
    else {
        html += "";
    }

    if (featured_pill === true){
        html += "<span class='pill featured'>Featured!</span>";
    }
    else {
        html += "";
    }

    return html;
    
}

//Builds and returns the job title html, based on the job provided as a param
function buildTitleHTML(title) {
    //Declares a variable called html using the title property of the provided job
    var html = "<h6>" + title + "</h6>";
    //Returns the html variable so that we can get the data back out of
    return html;
}

function buildDetailsHTML(date, type, location){
    var html = "<span class='info'>" + date + "</span><span class='dot'>&#8226;</span><span class='info'>" + type + "</span><span class='dot'>&#8226;</span><span class='info'>" + location + "</span>";
    return html;
}

function buildTagsHTML(tags){
    var html = "";
    
    for(var i = 0; i < tags.length; i++){
        html += " <span>" + tags[i] + "</span>";
    }

    return html;
}