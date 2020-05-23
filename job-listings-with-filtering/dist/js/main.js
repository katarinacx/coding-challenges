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

eval("window.jobs = [\r\n    {\r\n        company_image : \"../images/\",\r\n        company: \"Photosnap\",\r\n        new: true,\r\n        featured: true,\r\n        title: \"Senior Frontend Developer\",\r\n        date: \"1d ago\",\r\n        type: \"Full Time\",\r\n        location: \"USA Only\",\r\n        tags: [\r\n            \"Frontend\", \r\n            \"Senior\",\r\n            \"HTML\",\r\n            \"CSS\",\r\n            \"JavaScript\"\r\n        ]\r\n    },\r\n    {\r\n        company: \"Manage\",\r\n        title: \"Fullstack Developer\"\r\n    },\r\n    {\r\n        company: \"Account\",\r\n        title: \"Junior Frontend Developer\"\r\n    },\r\n    {\r\n        company: \"MyHome\",\r\n        title: \"Junior Frontend Developer\"\r\n    },\r\n    {\r\n        company: \"Loop Studios\",\r\n        title: \"Software Engineer\"\r\n    },\r\n    {\r\n        company: \"FaceIt\",\r\n        title: \"Junior Backend Developer\"\r\n    },\r\n    {\r\n        company: \"Shortly\",\r\n        title: \"Junior Developer\"\r\n    },\r\n    {\r\n        company: \"Insure\",\r\n        title: \"Junior Frontend Developer\"\r\n    },\r\n    {\r\n        company: \"Eeyecam Co.\",\r\n        title: \"Full Stack Engineer\"\r\n    },\r\n    {\r\n        company: \"The Air Filter Company\",\r\n        title: \"Front-end Dev\"\r\n    }\r\n];\r\n\r\nwindow.initialise = function () {\r\n    //Declare variable called listing_html and sets it to the outcome of the function (returns the html)\r\n    var listing_html = buildListingHTML();\r\n    //Calls function and passes in the param\r\n    renderListings(listing_html);\r\n};\r\n\r\nfunction renderListings (listing_html) {\r\n    $('#container').html(listing_html);\r\n}\r\n\r\n// Builds and returns the HTML string to be printed to the screen\r\nfunction buildListingHTML (){\r\n    //Declares variable called html and sets it to an empty string\r\n    var html = \"\";\r\n\r\n    //Loops over the window.jobs array, incrementing i by 1 until it hits the max length of the array\r\n    for(var i = 0; i < window.jobs.length; i++) {\r\n        //Declares a variable called job and sets it to the i index of the window.jobs array (a job object)\r\n        var job = window.jobs[i];\r\n        //Appending the job listing html to the variable we set earlier in the function \r\n        html += '<div class=\"row\">' \r\n                    + '<div class=\"col-12\">'\r\n                        + '<div class=\"job-card featured box-shadow\">'\r\n                            + '<div class=\"col-12 col-md-6 details\">'\r\n                                + buildCompanyHTML(job.company)\r\n                                + buildTitleHTML(job)\r\n                            + '</div>'\r\n                            + '<div class=\"col-12 col-md-6 tags\">'\r\n                            + '</div>'\r\n                        + '</div>'\r\n                    + '</div>'\r\n                + '</div>';\r\n    }\r\n\r\n    //Returns the html variable \r\n    return html;\r\n}\r\n\r\n//Builds and returns the job title html, based on the job provided as a param\r\nfunction buildTitleHTML(job) {\r\n    //Declares a variable called html using the title property of the provided job\r\n    var html = \"<h1>\" + job.title + \"</h1>\";\r\n    //Returns the html variable so that we can get the data back out of\r\n    return html;\r\n}\r\n\r\nfunction buildCompanyHTML(company) {\r\n    var html = \"<h3>\" + company + \"</h3>\";\r\n    return html;\r\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });