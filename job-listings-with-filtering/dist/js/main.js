/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.jobs = [\n    {\n        company_image : \"../images/\",\n        company: \"Photosnap\",\n        new: true,\n        featured: true,\n        title: \"Senior Frontend Developer\",\n        date: \"1d ago\",\n        type: \"Full Time\",\n        location: \"USA Only\",\n        tags: [\n            \"Frontend\", \n            \"Senior\",\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\"\n        ]\n    },\n    {\n        company: \"Manage\",\n        title: \"Fullstack Developer\"\n    },\n    {\n        company: \"Account\",\n        title: \"Junior Frontend Developer\"\n    },\n    {\n        company: \"MyHome\",\n        title: \"Junior Frontend Developer\"\n    },\n    {\n        company: \"Loop Studios\",\n        title: \"Software Engineer\"\n    },\n    {\n        company: \"FaceIt\",\n        title: \"Junior Backend Developer\"\n    },\n    {\n        company: \"Shortly\",\n        title: \"Junior Developer\"\n    },\n    {\n        company: \"Insure\",\n        title: \"Junior Frontend Developer\"\n    },\n    {\n        company: \"Eeyecam Co.\",\n        title: \"Full Stack Engineer\"\n    },\n    {\n        company: \"The Air Filter Company\",\n        title: \"Front-end Dev\"\n    }\n];\n\nwindow.initialise = function () {\n    //Declare variable called listing_html and sets it to the outcome of the function (returns the html)\n    var listing_html = buildListingHTML();\n    //Calls function and passes in the param\n    renderListings(listing_html);\n};\n\nfunction renderListings (listing_html) {\n    $('#container').html(listing_html);\n}\n\n// Builds and returns the HTML string to be printed to the screen\nfunction buildListingHTML (){\n    //Declares variable called html and sets it to an empty string\n    var html = \"\";\n\n    //Loops over the window.jobs array, incrementing i by 1 until it hits the max length of the array\n    for(var i = 0; i < window.jobs.length; i++) {\n        //Declares a variable called job and sets it to the i index of the window.jobs array (a job object)\n        var job = window.jobs[i];\n        //Appending the job listing html to the variable we set earlier in the function \n        html += '<div class=\"row\">' \n                    + '<div class=\"col-12\">'\n                        + '<div class=\"job-card featured box-shadow\">'\n                            + '<div class=\"col-12 col-md-6 details\">'\n                                + buildCompanyHTML(job.company)\n                                + buildTitleHTML(job)\n                            + '</div>'\n                            + '<div class=\"col-12 col-md-6 tags\">'\n                            + '</div>'\n                        + '</div>'\n                    + '</div>'\n                + '</div>';\n    }\n\n    //Returns the html variable \n    return html;\n}\n\n//Builds and returns the job title html, based on the job provided as a param\nfunction buildTitleHTML(job) {\n    //Declares a variable called html using the title property of the provided job\n    var html = \"<h1>\" + job.title + \"</h1>\";\n    //Returns the html variable so that we can get the data back out of\n    return html;\n}\n\nfunction buildCompanyHTML(company) {\n    var html = \"<h3>\" + company + \"</h3>\";\n    return html;\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });