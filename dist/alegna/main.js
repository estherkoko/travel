(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-hero py-5\">\n  </div>\n  <div class=\"bg-light\">\n  <div class=\"container pt-5\">\n      <div class=\"row\">\n        <div class=\"col-md-8 py-5\">\n         <h1 class=\"font-weight-bold h1-height\">\n           Alegna Travel & Events is a travel and events company that caters to corporate and leisure clients. It was founded in 2015 by Angela Casara.\n          </h1>\n          <p class=\"pt-1 p-height\">\n            She had the privilege to render services to Miss Heritage Global beauty pageant in 2015 that was held at the Gallagher Estate in Midrand. Managing all travel arrangements from booking flights and hotel accommodation for participants from more than 50 countries internationally. \n            Its female black owned level 1 B-BBEE Accredited.\n          </p>  \n       \n           \n        </div>\n        <div class=\"col-md-4\">\n          <img src=\"../../assets/img/work_03.jpg\" class=\"founder-img\"/>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-12 py-3\">\n           <h2 class=\"font-weight-bold\">Core Values</h2> \n           <ul class=\"list-style pl-3\">\n              <li>A commitment of integrity</li>\n              <li>Have a transparent policy. No hidden agenda</li>\n              <li>Professionalism</li>\n              <li>The pursuit of excellence</li>\n              <li>Treat customers, employees and suppliers, as we would want to be treated</li>\n            </ul>\n       \n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 py-3\">\n             <h2 class=\"font-weight-bold\">Vision</h2> \n             <p >To become one of the most accomplished and creative travel and corporate events management companies globally</p>\n         \n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12 py-3\">\n               <h2 class=\"font-weight-bold\">Mission</h2> \n               <ul class=\"list-style pl-3\">\n                  <li>Offer tailor-made services to clients</li>\n                  <li>Have client retention with satisfied clients</li>\n                  <li>To instil high morale with concerted teamwork</li>\n                  <li>To have professional and well trained staff</li>\n                  <li>Encourage creativity</li>\n                </ul>\n           \n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 py-3\">\n                 <h2 class=\"font-weight-bold\">Our promise to you</h2> \n                 <ul class=\"list-style pl-3\">\n                    <li>Quality service excellence - Cost effective solutions</li>\n                    <li>Ensuring you have an unforgettable experience</li>\n                    <li>We’ll save you time</li>\n                  </ul>\n             \n                </div>\n              </div>\n            </div>\n    </div>\n    \n  \n  "

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-hero {\n  background: url('event.jpg');\n  margin-top: -56px;\n  min-height: 40vh;\n  background-size: cover;\n  background-position: center 445px; }\n\n.founder-img {\n  width: 325px; }\n\n.h1-height {\n  line-height: 1.4; }\n\n.p-height {\n  line-height: 2 !important; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <router-outlet></router-outlet>\r\n</app-layout>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'alegna';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _servicetype_servicetype_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicetype/servicetype.component */ "./src/app/servicetype/servicetype.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'service', component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _locations_locations_component__WEBPACK_IMPORTED_MODULE_9__["LocationsComponent"],
                _servicetype_servicetype_component__WEBPACK_IMPORTED_MODULE_10__["ServicetypeComponent"]
            ],
            imports: [
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-hero py-5 text-white\">\r\n\r\n    <h1 class=\"text-center top-hero-text\">CONTACT</h1>\r\n    <p class=\"text-center \">\r\n        Do you have any request or you want to know more about us? <br>\r\n        Kindly do send us an email by filling in the form below and we'll get back to you as soon as we receive your\r\n        email.\r\n    </p>\r\n</div>\r\n<div>\r\n<div class=\"container pt-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 leftdiv p-5\">\r\n            <h1 class=\"font-weight-bold pt-4 text-warning\">SAY</h1>\r\n            <h1 class=\"font-weight-bold text-white linespacing pb-3\">HELLO.</h1>\r\n            <div class=\"leftborder pl-3 text-white\">\r\n                <p class=\"breakword\">\r\n                    Lorem ipsum dolor sit amet, consectetur\r\n                    adipiscing elit, sed do eiusmod tempor.\r\n                    Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur <br>\r\n                </p>\r\n                <p><i class=\"fas fa-phone\"></i> +27 (11) 038 1220<br>\r\n                    <i class=\"fas fa-phone\"></i> +27 (84) 535 8857</p>\r\n                <p><i class=\"fas fa-envelope\"></i> INFO@ALEGNATRAVEL.COM</p>\r\n                <p ><i class=\"fas fa-map-marker-alt\"></i> RIVERSAND INCUBATION HUB <br>BLOCK 2, BUSINESS\r\n                    SUITE 6, 8 INCUBATION DRIVE, <br>RIVERSIDE VIEW, EXT15, MIDRAND, SOUTH AFRICA</p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-6 shadow p-5 \">\r\n            <h2 class=\"text-center pb-4 font-weight-bold\">LET'S WORK TOGETHER</h2>\r\n            <form>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"fullname\">Fullname</label>\r\n                        <input type=\"text\" class=\"form-control border-left-0 border-right-0 border-top-0 border-bottom rounded-0 shadow-none pl-0\" placeholder=\"Enter your fullname\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"email\">Email address</label>\r\n                        <input type=\"email\" class=\"form-control border-left-0 border-right-0 border-top-0 border-bottom rounded-0 shadow-none pl-0\" placeholder=\"Enter your email address\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"subject\">Subject</label>\r\n                        <input type=\"text\" class=\"form-control border-left-0 border-right-0 border-top-0 border-bottom rounded-0 shadow-none pl-0\" placeholder=\"Enter subject of your email\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"message\">Message</label>\r\n                        <textarea type=\"text\" class=\"form-control  border-left-0 border-right-0 border-top-0 border-bottom rounded-0 shadow-none pl-0 pb-5\" placeholder=\"Start writing\"></textarea>\r\n                    </div>\r\n                  \r\n                    <div class=\"form-group col-6 offset-3 md-12 pt-3\">\r\n                        <button type=\"button\" class=\"btn btn-warning text-white btn-block rounded-0\">Submit Now</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*tophero{color:#5e6573*/\n.top-hero {\n  background: #1F494D url('luggage-guy.jpg');\n  margin-top: -56px;\n  min-height: 60vh;\n  background-blend-mode: multiply;\n  background-size: cover;\n  background-position: center 945px; }\n.top-hero-text {\n  margin-top: 100px; }\n.breakword {\n  width: 400px;\n  word-break: break-all; }\n.linespacing {\n  margin-top: -6px; }\n.leftborder {\n  border-left: 2px solid #f4bd39 !important; }\ninput:focus, textarea:focus {\n  border-bottom: 2px solid #f4bd39 !important; }\n.leftdiv {\n  background: #1F494D; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tophero text-white\">\r\n  \r\n  <!-- Content here -->\r\n <div class=\"container text-center pt-5\">\r\n   <h1 class=\"display-3 content-middle \">Time to take a Break</h1>\r\n   <p class=\"text-center font-weight-bold h5 spacing\">Let's help manage your travel and leisure experience</p>\r\n\r\n   <div class=\"contact-layout py-3\">\r\n      <form class=\"form-row form-noborder p-4\">\r\n        <div class=\"form-group col-3 md-12 mb-2\">\r\n            <label for=\"fullname\" class=\"sr-only\">Fullname</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"Fullname\" placeholder=\"Fullname\">\r\n          </div>\r\n        <div class=\"form-group col-3 md-12 mb-2\">\r\n          <label for=\"email\" class=\"sr-only\">Email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n        </div>\r\n        <div class=\"form-group col-3 md-12 mb-2\">\r\n            <label for=\"subject\" class=\"sr-only\">Subject</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\">\r\n          </div>\r\n          <div class=\"form-group col-3 mx-sm-12 mb-2 pt-3 \">\r\n              <button type=\"submit\" class=\"btn btn-block text-white font-weight-bold\">Let's Talk</button>\r\n           </div>  \r\n        <div class=\"form-group col-9 mt-3\">\r\n            <label for=\"message\" class=\"sr-only\">Message</label>\r\n            <input type=\"text\" class=\"form-control \" id=\"message\" placeholder=\"Message\">\r\n          </div>\r\n        \r\n      </form>\r\n\r\n   </div>\r\n   <div class=\"row mt-4 services\">\r\n      <div class=\"col-sm-4 text-left\">\r\n        01 <span class=\"font-weight-bold\">Flight Booking</span>\r\n        <p class=\"mt-2\">\r\n          Lorem ipsum dolor sit amet, consectetur \r\n          adipiscing elit, sed do eiusmod tempor.  \r\n          Ut enim ad minim veniam\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-4 text-left\">\r\n        02 <span class=\"font-weight-bold\">Holiday Packages</span>\r\n        <p class=\"mt-2\">\r\n          Lorem ipsum dolor sit amet, consectetur \r\n          adipiscing elit, sed do eiusmod tempor.  \r\n          Ut enim ad minim veniam\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-4 text-left\">\r\n        03 <span class=\"font-weight-bold\">Accomodation Arrangements</span>\r\n        <p class=\"mt-2\">\r\n          Lorem ipsum dolor sit amet, consectetur \r\n          adipiscing elit, sed do eiusmod tempor.  \r\n          Ut enim ad minim veniam\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-locations></app-locations>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tophero {\n  min-height: 100vh;\n  margin-top: -56px;\n  background-size: cover;\n  background-image: url('resort.jpg');\n  background-position-y: 970px; }\n\n.form-noborder .form-control {\n  border: 0;\n  border-radius: 0;\n  border-bottom: #ccc solid 1px;\n  background-color: #eee; }\n\n.ml-5, .mx-5 {\n  margin-left: 7rem !important; }\n\nbutton {\n  background-color: #1a1a1a;\n  border: none;\n  border-radius: 0; }\n\n::-webkit-input-placeholder {\n  color: #313030;\n  opacity: 1; }\n\n::-ms-input-placeholder {\n  color: #313030;\n  opacity: 1; }\n\n::placeholder {\n  color: #313030;\n  opacity: 1; }\n\n.contact-layout {\n  background-color: #F3EFEA;\n  opacity: .80;\n  margin-top: 70px; }\n\nhr {\n  border-bottom: #ccc solid 1px; }\n\n.content-middle {\n  margin-top: 150px !important; }\n\n.spacing {\n  margin-top: -10px; }\n\n.services div {\n  border-bottom: #fff solid 1px; }\n\n.services div:hover {\n  border-bottom-color: #FABE25; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_alegna_places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/alegna-places.service */ "./src/providers/alegna-places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(alegnaPlaceService) {
        this.alegnaPlaceService = alegnaPlaceService;
    }
    HomeComponent.prototype.getPlacesData = function () {
        this.myPlaces = this.alegnaPlaceService.getPlaces();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getPlacesData();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_alegna_places_service__WEBPACK_IMPORTED_MODULE_1__["AlegnaPlacesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/locations/locations.component.html":
/*!****************************************************!*\
  !*** ./src/app/locations/locations.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\r\n  <div class=\"container\">\r\n\r\n    <h1>Alegna Travels & Events</h1>\r\n    Alegna Travel & Events is a travel and events company that caters to\r\n    <p>corporate and leisure clients. It was founded by Angela Casara in 2015.</p>\r\n\r\n  </div>\r\n  <div class=\"row py-2\" >\r\n\r\n    <div class=\"col-md-3 p-0\" *ngFor=\"let places of myPlaces\">\r\n      <img src='{{places.image}}' class=\"alegna-img img-fluid\"/>\r\n      <div class=\"pl-4 bottom-left text-white font-weight-bold\">\r\n        {{places.name}}\r\n        <p>{{places.location}}</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/locations/locations.component.scss":
/*!****************************************************!*\
  !*** ./src/app/locations/locations.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alegna-img {\n  background-size: cover;\n  height: 600px;\n  background-repeat: no-repeat; }\n\n.bottom-left {\n  margin-top: -60px; }\n"

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/locations/locations.component.ts ***!
  \**************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_alegna_places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/alegna-places.service */ "./src/providers/alegna-places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(alegnaPlaceService) {
        this.alegnaPlaceService = alegnaPlaceService;
    }
    LocationsComponent.prototype.getPlacesData = function () {
        this.myPlaces = this.alegnaPlaceService.getPlaces();
    };
    LocationsComponent.prototype.ngOnInit = function () {
        this.getPlacesData();
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_alegna_places_service__WEBPACK_IMPORTED_MODULE_1__["AlegnaPlacesService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tophero\"></div>\n<app-servicetype></app-servicetype>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tophero {\n  min-height: 70vh;\n  margin-top: -56px;\n  background-size: cover;\n  background-image: url('group.jpg');\n  background-position-y: center; }\n\n.services-border {\n  border-bottom: #ccc solid 3px; }\n\n.spacing {\n  margin-top: -12px; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/servicetype/servicetype.component.html":
/*!********************************************************!*\
  !*** ./src/app/servicetype/servicetype.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light text-center py-5 services\">\n    <div class=\"container\">\n           <h2 class=\"font-weight-bold mt-4\">Our World Class Service</h2> \n            <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>\n            <p class=\"spacing\">tempor. Ut enim ad minim veniam</p>\n       \n    </div>\n    <div class=\"container\">\n    <div class=\"bg-white shadow row service my-5\" *ngFor=\"let type of serviceType\"> \n        <div class=\"col-sm-4 pr-0 pl-0\">\n             <img src='{{type.image}}' class=\"img-fluid\"/>\n        </div>\n        <div class=\"col-sm-8\">\n            <h3 class=\"font-weight-bold text-left mt-3\">{{type.name}}</h3>\n           \n           <p class=\"text-left\">\n                {{type.details}}\n                <br>\n                <button type=\"submit\" class=\"btn btn-primary mt-2 font-weight-bold align-self-end bg-warning\">Explore More</button>\n\n           </p> \n\n        </div>  \n     </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/servicetype/servicetype.component.scss":
/*!********************************************************!*\
  !*** ./src/app/servicetype/servicetype.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services {\n  margin-top: -20px; }\n\n.service {\n  max-height: 300px;\n  overflow: hidden; }\n\nbutton {\n  background-color: #FABE25;\n  border: none;\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/servicetype/servicetype.component.ts":
/*!******************************************************!*\
  !*** ./src/app/servicetype/servicetype.component.ts ***!
  \******************************************************/
/*! exports provided: ServicetypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicetypeComponent", function() { return ServicetypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_alegna_places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/alegna-places.service */ "./src/providers/alegna-places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicetypeComponent = /** @class */ (function () {
    function ServicetypeComponent(alegnaPlacesService) {
        this.alegnaPlacesService = alegnaPlacesService;
    }
    ServicetypeComponent.prototype.getServicetType = function () {
        this.serviceType = this.alegnaPlacesService.getServices();
    };
    ServicetypeComponent.prototype.ngOnInit = function () {
        return this.getServicetType();
    };
    ServicetypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicetype',
            template: __webpack_require__(/*! ./servicetype.component.html */ "./src/app/servicetype/servicetype.component.html"),
            styles: [__webpack_require__(/*! ./servicetype.component.scss */ "./src/app/servicetype/servicetype.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_alegna_places_service__WEBPACK_IMPORTED_MODULE_1__["AlegnaPlacesService"]])
    ], ServicetypeComponent);
    return ServicetypeComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8 ml-5\">© Copyright. Alegna Travel & Events</div>\r\n    <div class=\"col-3 mr-2\">\r\n      <span class=\"pr-4 mr-4\"> Twitter</span>\r\n      <span class=\"pr-4 mr-4\">LinkedIn</span>\r\n      <span class=\"pr-4 mr-4 align-self-end\">Facebook</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-transparent\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"nav navbar-nav\">\r\n                <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-item nav-link\">Home </a>      \r\n                <a routerLink=\"/service\" routerLinkActive=\"active\" class=\"nav-item nav-link \">Services</a>\r\n                <a routerLink=\"/about\" routerLinkActive=\"active\" class=\"nav-item nav-link \">About Us</a>\r\n                <a routerLink=\"/contact\" routerLinkActive=\"active\" class=\"nav-item nav-link\" >Contact Us</a>\r\n      </div>\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark .navbar-nav .nav-link {\n  color: white; }\n\n.navbar-nav .nav-link.active {\n  color: #FFE25A !important;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div>\r\n  <ng-content></ng-content>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ui/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/providers/alegna-places.service.ts":
/*!************************************************!*\
  !*** ./src/providers/alegna-places.service.ts ***!
  \************************************************/
/*! exports provided: AlegnaPlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlegnaPlacesService", function() { return AlegnaPlacesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlegnaPlacesService = /** @class */ (function () {
    function AlegnaPlacesService() {
        this.places = [
            { image: '../../assets/img/durban.jpg', name: 'Moses Mabhida Stadium', location: 'Durban' },
            { image: '../../assets/img/bokap.jpg', name: 'Bo-Kaap Museum', location: 'Cape Town' },
            { image: '../../assets/img/elephant.jpg', name: 'Elephant National Park', location: 'Addo' },
            { image: '../../assets/img/cave.jpg', name: 'Cradle of Humankind', location: 'Johannesburg' }
        ];
        this.services = [
            { image: '../../assets/img/accommodation_arrangements.jpg', name: 'Accommodation Arrangements', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis rutrum bibendum. Duis at quam velit. Vivamus vitae porta tellus. Nam vehicula vel odio non malesuada. Nullam quis lacinia dui. Maecenas egestas quam egestas ex efficitur tristique. Aenean commodo finibus accumsan' },
            { image: '../../assets/img/flight_bookings.jpg', name: 'Flight Bookings', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis rutrum bibendum. Duis at quam velit. Vivamus vitae porta tellus. Nam vehicula vel odio non malesuada. Nullam quis lacinia dui. Maecenas egestas quam egestas ex efficitur tristique. Aenean commodo finibus accumsan' },
            { image: '../../assets/img/holiday_packages.jpg', name: 'Holiday Packages', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis rutrum bibendum. Duis at quam velit. Vivamus vitae porta tellus. Nam vehicula vel odio non malesuada. Nullam quis lacinia dui. Maecenas egestas quam egestas ex efficitur tristique. Aenean commodo finibus accumsan' }
        ];
    }
    AlegnaPlacesService.prototype.getPlaces = function () {
        return this.places;
    };
    AlegnaPlacesService.prototype.getServices = function () {
        return this.services;
    };
    AlegnaPlacesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlegnaPlacesService);
    return AlegnaPlacesService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayB\Documents\AngularApps\alegna\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map