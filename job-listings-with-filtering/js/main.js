window.jobs = [
    {
        company_image : "../images/",
        company: "Photosnap",
        new: true,
        featured: true,
        title: "Senior Frontend Developer",
        date: "1d ago",
        type: "Full Time",
        location: "USA Only",
        tags: [
            "Frontend", 
            "Senior",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        company: "Manage",
        title: "Fullstack Developer"
    },
    {
        company: "Account",
        title: "Junior Frontend Developer"
    },
    {
        company: "MyHome",
        title: "Junior Frontend Developer"
    },
    {
        company: "Loop Studios",
        title: "Software Engineer"
    },
    {
        company: "FaceIt",
        title: "Junior Backend Developer"
    },
    {
        company: "Shortly",
        title: "Junior Developer"
    },
    {
        company: "Insure",
        title: "Junior Frontend Developer"
    },
    {
        company: "Eeyecam Co.",
        title: "Full Stack Engineer"
    },
    {
        company: "The Air Filter Company",
        title: "Front-end Dev"
    }
];

window.initialise = function () {
    //Declare variable called listing_html and sets it to the outcome of the function (returns the html)
    var listing_html = buildListingHTML();
    //Calls function and passes in the param
    renderListings(listing_html);
};

function renderListings (listing_html) {
    $('#container').html(listing_html);
}

// Builds and returns the HTML string to be printed to the screen
function buildListingHTML (){
    //Declares variable called html and sets it to an empty string
    var html = "";

    //Loops over the window.jobs array, incrementing i by 1 until it hits the max length of the array
    for(var i = 0; i < window.jobs.length; i++) {
        //Declares a variable called job and sets it to the i index of the window.jobs array (a job object)
        var job = window.jobs[i];
        //Appending the job listing html to the variable we set earlier in the function 
        html += '<div class="row">' 
                    + '<div class="col-12">'
                        + '<div class="job-card featured box-shadow">'
                            + '<div class="col-12 col-md-6 details">'
                                + buildCompanyHTML(job.company)
                                + buildTitleHTML(job)
                            + '</div>'
                            + '<div class="col-12 col-md-6 tags">'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>';
    }

    //Returns the html variable 
    return html;
}

//Builds and returns the job title html, based on the job provided as a param
function buildTitleHTML(job) {
    //Declares a variable called html using the title property of the provided job
    var html = "<h1>" + job.title + "</h1>";
    //Returns the html variable so that we can get the data back out of
    return html;
}

function buildCompanyHTML(company) {
    var html = "<h3>" + company + "</h3>";
    return html;
}