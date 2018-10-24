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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr><div class=\"container\">\n  <div class=\"header clearfix\" style=\"background-color:#3f75b3\">\n      <h3 class=\"text-center\">\n        <font  style=\"font-size: 21px;margin: 10;font-family: Verdana, Geneva, sans-serif;\" color=\"#fff\">\n         <b>Project Manager</b></font></h3>\n      <nav class=\"navbar navbar-expand-sm bg-light\">\n          <div class=\"container-fluid\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                  <a routerLink=\"project\" class=\"nav-link\" routerLinkActive=\"active\">\n                    Add Project\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink=\"addtask\" class=\"nav-link\" routerLinkActive=\"active\">\n                      Add Task\n                    </a>\n                  </li>\n                <li class=\"nav-item\">\n                  <a routerLink=\"user\" class=\"nav-link\" routerLinkActive=\"active\">\n                    Add User\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a routerLink=\"viewtask\" class=\"nav-link\" routerLinkActive=\"active\">\n                  View Task\n                  </a>\n                </li> \n            </ul>\n          </div>\n        </nav>\n\n        \n  </div>\n\n  <div class=\"row marketing\">\n    <div class=\"col-lg-12 col-md-12 col-xs-12\"><br>\n        <flash-messages></flash-messages>\n        \n        <router-outlet></router-outlet>\n    </div>\n\n    \n  </div>\n\n  <footer class=\"footer\">\n   \n  </footer>\n\n</div> \n\n\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-typeahead */ "./node_modules/ngx-typeahead/esm5/ngx-typeahead.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_task_add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/task/add/add.component */ "./src/app/components/task/add/add.component.ts");
/* harmony import */ var _components_task_view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/task/view/view.component */ "./src/app/components/task/view/view.component.ts");
/* harmony import */ var _components_task_update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/task/update/update.component */ "./src/app/components/task/update/update.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _findprojectname_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./findprojectname.pipe */ "./src/app/findprojectname.pipe.ts");
/* harmony import */ var _findtaskname_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./findtaskname.pipe */ "./src/app/findtaskname.pipe.ts");
/* harmony import */ var _findusername_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./findusername.pipe */ "./src/app/findusername.pipe.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




;


// Componenets






// Load datepicker







// Addind Routes

var routes = [
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
    { path: 'project', component: _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"] },
    { path: 'addtask', component: _components_task_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"] },
    { path: 'viewtask', component: _components_task_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"] },
    { path: 'updatetask/:id', component: _components_task_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
                _components_task_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _components_task_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
                _components_task_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
                _findtaskname_pipe__WEBPACK_IMPORTED_MODULE_16__["FindtasknamePipe"],
                _findusername_pipe__WEBPACK_IMPORTED_MODULE_17__["FindusernamePipe"],
                _findprojectname_pipe__WEBPACK_IMPORTED_MODULE_15__["FindprojectnamePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ngx_typeahead__WEBPACK_IMPORTED_MODULE_4__["NgxTypeaheadModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_1__["NgDatepickerModule"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/project/project.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n        <h3 class=\"text-center\">\n        <font  style=\"height:5%;font-size: 14px;font-family: Verdana, Geneva, sans-serif;\" \n        color=\"#3f88b3\">\n        <b>Project</b></font></h3>\n                <hr>\n    <div class=\"card-body\">\n        <form #projectForm=\"ngForm\">\n    <div class=\"form-group row\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Project:</label>\n        <div class=\"col-sm-6\">\n              <input type=\"text\" class=\"form-control\" id=\"project\" required\n              [(ngModel)]=\"projectObj.project\" name=\"project\" #project=\"ngModel\">\n         </div>\n      </div>\n      <div [hidden]=\"project.valid || project.pristine\"\n      class=\"alert alert-danger\">\n         Project is required\n     </div>\n\n   <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <div class=\"col-sm-4\">\n            <div class=\"form-check\">\n                <input type=\"checkbox\" id=\"getcheck\" name=\"getcheck\" [(ngModel)] =\"showMe\">\n                 <label class=\"form-check-label\" for=\"gridCheck1\">\n                    &nbsp;Set Start and End Date\n              </label>\n            </div>\n        </div>\n      </div> <!-- *ngIf=\"showMe\" -->\n        <div class=\"form-group row\" *ngIf=\"showMe\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\"></label>\n          \n            <div class=\"col-sm-4\">\n                    <input type=\"date\" class=\"form-control\" name=\"start_date\" id=\"start_date\"\n                    [(ngModel)]=\"projectObj.start_date\" #start_date=\"ngModel\">\n            </div>\n          \n          <div class=\"col-sm-4\">\n                <input type=\"date\" class=\"form-control\" name=\"end_date\" id=\"end_date\"\n                [(ngModel)] =\"projectObj.end_date\" #end_date=\"ngModel\">\n                    </div>\n      \n    </div>\n        <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Priority:</label>\n            <div class=\"col-sm-6\">\n                  <input type=\"range\"  class=\"form-control\" id=\"priority\" \n                required\n              [(ngModel)]=\"projectObj.priority\" name=\"priority\" #priority=\"ngModel\" min=\"0\" max=\"30\"\n               value=\"0\"   oninput=\"amount.value=priority.value\">                                                       \n         Selected Value : \n         <output id=\"amount\" name=\"amount\" for=\"priority\">{{ projectObj.priority }}</output>\n\n           </div>\n        </div>\n        <div [hidden]=\"priority.valid || priority.pristine\"\n        class=\"alert alert-danger\">\n           priority is required\n       </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Manager :</label>\n            <div class=\"col-sm-6\">\n                 <ng-template #rt let-r=\"result.first_name\" let-t=\"term\">\n                    <ngb-highlight [result]=\"r\" [term]=\"t\"></ngb-highlight>\n                  </ng-template>\n                  <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" \n                    [(ngModel)]=\"projectObj.manager\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" \n                      [inputFormatter]=\"formatter\" [ngModelOptions]=\"{standalone: true}\" />\n         </div>\n           <div class=\"col-sm-2\">\n              <input type=\"button\" value=\"search\">\n          </div>\n        </div>\n        \n      \n            <div class=\"btn-group btn-group-sm\">\n                <span *ngIf=\"getCheckID\">\n                <button type=\"button\"  class=\"btn btn-info\" (click)=\"updateProject()\" [disabled]=\"!projectForm.form.valid\">Update </button> &nbsp;\n                </span>\n                <span *ngIf=\"!getCheckID\">\n                <button type=\"button\"  class=\"btn btn-info\" (click)=\"addProject()\" [disabled]=\"!projectForm.form.valid\">Add </button> &nbsp;\n                </span>\n                <button type=\"reset\" class=\"btn btn-dark\">Reset</button>\n            </div>\n       </form>\n    </div>\n</div>\n\n<div class=\"card\" >\n        <div class=\"card-body\" *ngIf=\"projectList; else templateName\">\n\n    \n     <div class=\"input-group\">\n            <label><b>Search</b> :</label><p>&nbsp;</p>\n            <span class=\"input-group-btn\">\n                <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search\"><p>&nbsp;</p>\n            </span><p>&nbsp;</p><p>&nbsp;</p>\n            <br>\n            <label><b>Sort</b> :</label><p>&nbsp;</p>\n            <span class=\"input-group-btn\">\n                <button id=\"sort_start_date\" (click)=\"getProjects('start_date')\"   class=\"btn btn-default\">Start date</button>\n              </span> <p>&nbsp;</p><p>&nbsp;</p>\n              <span class=\"input-group-btn\">\n                  <button id=\"sort_end_date\" (click)=\"getProjects('end_date')\"  class=\"btn btn-default\">End Date</button>\n                </span><p>&nbsp;</p><p>&nbsp;</p>\n                <span class=\"input-group-btn\">\n                    <button id=\"sort_priority\" (click)=\"getProjects('priority')\"  class=\"btn btn-default\">Priority </button>\n                  </span>\n    </div>\n  \n\n    <table class=\"table table-hover\" style =\"font-size:12px;\">\n        <thead>\n        <tr>\n            <td><b>Project</b></td>\n            <td><b>Start Date</b></td>\n            <td><b>End Date</b></td>\n            <td><b>Priority</b></td>\n            <td><b>Manager</b></td>\n            <td colspan=\"2\"></td>\n        </tr>\n        </thead>\n         <tbody *ngIf=\"projectList\">\n      <tr *ngFor=\"let ul of projectList | filter : {project: searchText, priority: searchText}; \n      let i=index;\">\n       <td>{{ ul.project }}</td>\n                <td>{{ ul.start_date | date:\"dd-MMM-yyyy\" }}</td>\n                <td>{{ ul.end_date | date:\"dd-MMM-yyyy\" }}</td>\n                <td>{{ ul.priority }}</td>\n                <td>{{ ul.manager | findusername : usersResult }}</td>\n                <td>\n                 <button (click)=\"findbyID(ul._id)\"  class=\"btn btn-info btn-xs\">Edit</button>\n                </td>\n                <td>\n                <button (click)=\"deleteProject(ul._id)\"  class=\"btn btn-danger btn-xs\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n      </table>\n</div>\n<ng-template #templateName>\n        <br> <div class=\"alert alert-info\">\n                                <div class=\"row justify-content-around\">\n                             <p> <b> No Projects Found. </b></p>\n                      </div>\n                </div>\n</ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../project */ "./src/app/project.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router, flashMessagesService, userService, projectService, location) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.userService = userService;
        this.projectService = projectService;
        this.location = location;
        this.projectObj = new _project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.submitted = false;
        this.starting_date = {};
        this.ending_date = {};
        this.selectedParent = null;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjects(this.sortval);
        this.ngBootstrapTypeahead();
        this.getUser();
    };
    ProjectComponent.prototype.getUser = function () {
        var _this = this;
        return this.userService.getUsersList()
            .subscribe(function (data) {
            _this.usersResult = data;
            console.log(_this.usersResult);
        });
    };
    ProjectComponent.prototype.ngBootstrapTypeahead = function () {
        var _this = this;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? []
                : _this.usersResult.filter(function (tr) { return tr.first_name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) {
            return x.first_name;
        };
    };
    ProjectComponent.prototype.selectedItem = function (item) {
        this.clickedItem = item.item._id;
        console.log('here we go');
        console.log(this.clickedItem);
    };
    ProjectComponent.prototype.addProject = function () {
        /* this.projectObj.start_date = new Date(this.projectObj.start_date);
         this.projectObj.start_date.toISOString().substring(0, 10);
     
         this.projectObj.end_date = new Date(this.projectObj.end_date);
         this.projectObj.end_date.toISOString().substring(0, 10); */
        var _this = this;
        this.projectService.saveProject(this.projectObj).subscribe(function (success) {
            _this.flashMessagesService.show('Project added succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
        this.ngOnInit();
    };
    ProjectComponent.prototype.updateProject = function () {
        var _this = this;
        this.submitted = true;
        this.projectService.updateProject(this.getCheckID, this.projectObj)
            .subscribe(function (success) {
            _this.flashMessagesService.show('Project update succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
        location.reload();
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.submitted = true;
        this.projectService.deleteProject(id)
            .subscribe(function (success) {
            _this.flashMessagesService.show('Project deleted succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
        location.reload();
    };
    ProjectComponent.prototype.findbyID = function (id) {
        var _this = this;
        this.getCheckID = id;
        // this.projectObj.end_date = new Date(`${this.ending_date.year}/${this.ending_date.month}/${this.ending_date.day}`);
        // this.projectObj.start_date = new Date(`${this.starting_date.year}/${this.starting_date.month}/${this.starting_date.day}`);
        this.projectService.getProjectsById(id)
            .subscribe(function (project) { return _this.projectObj = project; });
    };
    ProjectComponent.prototype.getProjects = function (val) {
        var _this = this;
        this.sortval = val;
        if (this.sortval) {
            return this.projectService.getSortedProjectsList(this.sortval)
                .subscribe(function (projectList) {
                console.log(projectList);
                _this.projectList = projectList;
            });
        }
        else {
            return this.projectService.getProjectsList()
                .subscribe(function (projectList) {
                console.log(projectList);
                _this.projectList = projectList;
            });
        }
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/components/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/task/add/add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/task/add/add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/task/add/add.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/task/add/add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <h3 class=\"text-center\">\n    <font  style=\"height:5%;font-size: 14px;font-family: Verdana, Geneva, sans-serif;\" \n    color=\"#3f88b3\">\n    <b>Add Task</b></font></h3>\n    <hr>\n    <div class=\"card-body\">\n      <form #taskForm=\"ngForm\">\n        \n    <div class=\"form-group row\">\n      <label for=\"task\" class=\"col-sm-3 col-form-label\">Project </label>\n      <div class=\"col-sm-9\">\n            <ng-template #pr let-p=\"result\" let-r=\"term\">\n                <ngb-highlight [result]=\"p.project\" [term]=\"r\"></ngb-highlight>\n            </ng-template>\n            <input id=\"typeahead-template\" type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"taskObj.project\" [ngbTypeahead]=\"searchProject\" [resultTemplate]=\"pr\"\n           [inputFormatter]=\"formatterProject\" [ngModelOptions]=\"{standalone: true}\" />\n        </div>\n    </div>\n   \n      <div class=\"form-group row\">\n         <label for=\"task\" class=\"col-sm-3 col-form-label\"> </label>\n           <div class=\"col-sm-9\">\n             <div class=\"form-check\">\n                  <label class=\"form-check-label\" for=\"gridCheck1\">\n                    &nbsp; Parent Task\n              </label>\n            </div>\n        </div>\n      </div>\n    \n      <div class=\"form-group row\">\n          <label for=\"task\" class=\"col-sm-3 col-form-label\">Task</label>\n          <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" id=\"project\" required\n              [(ngModel)]=\"taskObj.task\" name=\"project\"  #project=\"ngModel\">\n          </div>\n      </div>\n      \n    <div id=\"showhide\" *ngIf=\"!showMe\">          \n         <div class=\"form-group row\">\n            <label for=\"priority\" class=\"col-sm-3 col-form-label\">Priority</label>\n                <label class=\"col-sm-1 col-form-label\">0</label>\n            <div class=\"col-sm-5\">\n              <input type=\"range\"  class=\"form-control\" id=\"priority\" \n              required\n            [(ngModel)]=\"taskObj.priority\" name=\"priority\" #priority=\"ngModel\" min=\"0\" max=\"30\"\n             value=\"0\"   oninput=\"amount.value=priority.value\">                                                       \n       Selected Value : \n       <output id=\"amount\" name=\"amount\" for=\"priority\">{{taskObj.priority}}</output>\n            </div>\n            <label class=\"col-sm-1 col-form-label\">30</label>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"parentTask\" class=\"col-sm-3 col-form-label\">Parent Task</label>\n            <div class=\"col-sm-9\">\n                <ng-template #st let-s=\"result\" let-t=\"term\">\n                    <ngb-highlight [result]=\"s.task\" [term]=\"t\"></ngb-highlight>\n                </ng-template>\n                <input id=\"typeahead-template\" type=\"text\" class=\"form-control\"\n                [(ngModel)]=\"taskObj.parent_task\" [ngbTypeahead]=\"searchTask\" [resultTemplate]=\"st\"\n               [inputFormatter]=\"formatterTask\"  [ngModelOptions]=\"{standalone: true}\"/>\n            </div>\n            \n        </div>\n        \n      <!--  <div class=\"form-group row\">\n            <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date</label>\n            <div class=\"col-sm-9\">\n               <input type=\"text\" class=\"form-control\" style=\"width:300px;\" \n                (focus)=\"start_date.open()\" ngbDatepicker \n                #start_date=\"ngbDatepicker\" id=\"start_date\" \n                name=\"start_date\" [(ngModel)]=\"taskObj.start_date\">\n        </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date</label>\n            <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" style=\"width:300px;\" \n                (focus)=\"end_date.open()\" ngbDatepicker \n                #end_date=\"ngbDatepicker\" id=\"end_date\"\n                id=\"end_date\" name=\"end_date\" [(ngModel)]=\"taskObj.end_date\">\n          </div>\n          </div>\n        -->\n          <div class=\"form-group row\">\n            <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date </label>\n            <div class=\"col-sm-9\">\n                <input type=\"date\" class=\"form-control\" name=\"start_date\" id=\"start_date\"\n                [(ngModel)]=\"taskObj.start_date\" #start_date=\"ngModel\">\n        </div>\n        </div>\n       \n        <div class=\"form-group row\">\n            <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date </label>\n            <div class=\"col-sm-9\">\n                <input type=\"date\" class=\"form-control\" name=\"end_date\" id=\"end_date\"\n                [(ngModel)]=\"taskObj.end_date\" #start_date=\"ngModel\">\n          </div>\n          </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"task\" class=\"col-sm-3 col-form-label\">User</label>\n        <div class=\"col-sm-9\">\n          <ng-template #ur let-u=\"result\" let-r=\"term\">\n            <ngb-highlight [result]=\"u.first_name\" [term]=\"r\"></ngb-highlight>\n          </ng-template>\n          <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" \n            [(ngModel)]=\"taskObj.user\" [ngbTypeahead]=\"search\" [resultTemplate]=\"ur\" \n              [inputFormatter]=\"formatter\" [ngModelOptions]=\"{standalone: true}\" />\n        </div>\n    </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-3 offset-sm-3\">\n      <button type=\"button\"  class=\"btn btn-info\" (click)=\"addTask()\" \n      [disabled]=\"!taskForm.form.valid\">Add </button> &nbsp;\n    </div>\n    <div class=\"col-sm-3\">\n        <button type=\"reset\" class=\"btn btn-dark\">Reset</button>\n    </div>\n  </div>\n\n</form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/task/add/add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/task/add/add.component.ts ***!
  \******************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../task */ "./src/app/task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../project */ "./src/app/project.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import format from 'date-fns/format';
var AddComponent = /** @class */ (function () {
    function AddComponent(flashMessagesService, taskService, userService, projectService, router) {
        this.flashMessagesService = flashMessagesService;
        this.taskService = taskService;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        // Project
        //taskObj = new Task();
        this.taskObj = new _task__WEBPACK_IMPORTED_MODULE_7__["Task"]();
        this.userObj = new _user__WEBPACK_IMPORTED_MODULE_11__["User"]();
        this.projectObj = new _project__WEBPACK_IMPORTED_MODULE_9__["Project"]();
        this.selectedParent = null;
        this.selectedProject = null;
        this.selectedTask = null;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getUser();
        this.getTasks();
        this.TypeaheadUserSearch();
        this.TypeaheadProjectSearch();
        this.TypeaheadTaskSearch();
        this.setDate = new Date();
        //this.taskObj.start_date = (this.setDate.getMonth()+1)+'/'+this.setDate.getDate()+'/'+this.setDate.getFullYear();
        //this.taskObj.end_date = (this.setDate.getMonth()+1)+'/'+(this.setDate.getDate()+1)+'/'+this.setDate.getFullYear();
    };
    AddComponent.prototype.getTasks = function () {
        var _this = this;
        return this.taskService.getTasksList()
            .subscribe(function (data) {
            _this.tasksResult = data;
            console.log(_this.tasksResult);
        });
    };
    AddComponent.prototype.addTask = function () {
        alert(this.taskObj.start_date);
        alert(this.taskObj.end_date); /*
    
        this.taskService.saveTask(this.taskObj).subscribe(
            success => {
            this.flashMessagesService.show('Task added succesfully',
            { cssClass: 'alert-success', timeout: 3000 });
            this.ngOnInit();
            }, error => {
            this.flashMessagesService.show('Something went wrong',
            { cssClass: 'alert-danger', timeout: 3000 });
            });
    
            this.router.navigate(['/viewtask']);*/
    };
    AddComponent.prototype.TypeaheadTaskSearch = function () {
        var _this = this;
        this.searchTask = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return term === '' ? []
                : _this.tasksResult.filter(function (v) { return v.task.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatterTask = function (x) { return x.task; };
    };
    AddComponent.prototype.TypeaheadProjectSearch = function () {
        var _this = this;
        this.searchProject = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return term === '' ? []
                : _this.projectsResult.filter(function (v) { return v.project.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatterProject = function (x) { return x.project; };
    };
    AddComponent.prototype.TypeaheadUserSearch = function () {
        var _this = this;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return term === '' ? []
                : _this.usersResult.filter(function (tr) { return tr.first_name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) { return x.first_name; };
    };
    AddComponent.prototype.getUser = function () {
        var _this = this;
        return this.userService.getUsersList()
            .subscribe(function (data) {
            _this.usersResult = data;
            console.log(_this.usersResult);
        });
    };
    AddComponent.prototype.getProjects = function () {
        var _this = this;
        return this.projectService.getProjectsList()
            .subscribe(function (data) {
            _this.projectsResult = data;
            console.log(_this.projectsResult);
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/task/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/components/task/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"],
            _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/task/update/update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/task/update/update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/task/update/update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/task/update/update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <h3 class=\"text-center\">\n        <font  style=\"height:5%;font-size: 14px;font-family: Verdana, Geneva, sans-serif;\" \n        color=\"#3f88b3\">\n        <b>Update Task</b></font></h3>\n        <hr>\n    <div class=\"card-body\">\n      <form #taskForm=\"ngForm\">\n        \n    <div class=\"form-group row\">\n      <label for=\"task\" class=\"col-sm-3 col-form-label\">Project </label>\n      <div class=\"col-sm-9\">\n          <b>{{tasksResult.project | findprojectname : projectsResult}}</b>\n          <ng-template #pg let-p=\"result\" let-g=\"term\">\n              <ngb-highlight [result]=\"p.project\" [term]=\"g\"></ngb-highlight>\n          </ng-template>\n          <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" \n            [(ngModel)]=\"tasksResult.project\" [ngbTypeahead]=\"searchProject\" [resultTemplate]=\"pg\" \n              [inputFormatter]=\"formatterProject\" [ngModelOptions]=\"{standalone: true}\" />\n     </div>\n    </div>\n   \n      <div class=\"form-group row\">\n         <label for=\"task\" class=\"col-sm-3 col-form-label\"> </label>\n           <div class=\"col-sm-9\">\n             <div class=\"form-check\">\n                  <label class=\"form-check-label\" for=\"gridCheck1\">\n                    &nbsp; Parent Task\n              </label>\n            </div>\n        </div>\n      </div>\n    \n      <div class=\"form-group row\">\n          <label for=\"task\" class=\"col-sm-3 col-form-label\">Task</label>\n          <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" id=\"task\" required\n              [(ngModel)]=\"tasksResult.task\" name=\"task\"  #task=\"ngModel\">\n          </div>\n      </div>\n      \n    <div id=\"showhide\">          \n         <div class=\"form-group row\">\n            <label for=\"priority\" class=\"col-sm-3 col-form-label\">Priority</label>\n                <label class=\"col-sm-1 col-form-label\">0</label>\n            <div class=\"col-sm-5\">\n              <input type=\"range\"  class=\"form-control\" id=\"priority\" \n              required\n            [(ngModel)]=\"tasksResult.priority\" name=\"priority\" #priority=\"ngModel\" min=\"0\" max=\"30\"\n             value=\"0\"   oninput=\"amount.value=priority.value\">                                                       \n       Selected Value : \n       <output id=\"amount\" name=\"amount\" for=\"priority\">{{ tasksResult.priority }}</output>\n            </div>\n            <label class=\"col-sm-1 col-form-label\">30</label>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"parentTask\" class=\"col-sm-3 col-form-label\">Parent Task</label>\n            <div class=\"col-sm-9\">\n                <ng-template #st let-s=\"result\" let-t=\"term\">\n                    <ngb-highlight [result]=\"s.task\" [term]=\"t\"></ngb-highlight>\n                </ng-template>\n                <input id=\"typeahead-template\" type=\"text\" class=\"form-control\"\n                [(ngModel)]=\"tasksResult.parent_task \" [ngbTypeahead]=\"searchTask\" [resultTemplate]=\"st\"\n               [inputFormatter]=\"formatterTask\"  [ngModelOptions]=\"{standalone: true}\"/>\n            </div>\n            \n        </div>\n   \n          <div class=\"form-group row\">\n              <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date </label>\n              <div class=\"col-sm-9\">\n                  <input type=\"date\" class=\"form-control\" name=\"start_date\" id=\"start_date\"\n                  [(ngModel)]=\"tasksResult.start_date\" #start_date=\"ngModel\">\n          </div>\n          </div>\n         \n          <div class=\"form-group row\">\n              <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date </label>\n              <div class=\"col-sm-9\">\n                  <input type=\"date\" class=\"form-control\" name=\"end_date\" id=\"end_date\"\n                  [(ngModel)]=\"tasksResult.end_date\" #start_date=\"ngModel\">\n            </div>\n            </div>\n          \n      <!--        <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date</label>\n              <div class=\"col-sm-9\">\n                 <input type=\"text\" class=\"form-control\" style=\"width:300px;\" \n                  (focus)=\"start_date.open()\" ngbDatepicker \n                  #start_date=\"ngbDatepicker\" id=\"start_date\" \n                  name=\"start_date\" [(ngModel)]=\"tasksResult.start_date\">\n          </div>\n          </div>\n  \n          <div class=\"form-group row\">\n              <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date</label>\n              <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" style=\"width:300px;\" \n                  (focus)=\"end_date.open()\" ngbDatepicker \n                  #end_date=\"ngbDatepicker\" id=\"end_date\"\n                  id=\"end_date\" name=\"end_date\" [(ngModel)]=\"tasksResult.end_date\">\n            </div>\n            </div>-->\n    </div>\n\n <div class=\"form-group row\">\n        <label for=\"task\" class=\"col-sm-3 col-form-label\">User</label>\n        <div class=\"col-sm-9\">\n                <b>{{tasksResult.user | findusername : usersResult}}</b>\n            <ng-template #ur let-u=\"result\" let-r=\"term\">\n                <ngb-highlight [result]=\"u.first_name\" [term]=\"r\"></ngb-highlight>\n            </ng-template>\n            <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" \n              [(ngModel)]=\"tasksResult.user\" [ngbTypeahead]=\"search\" [resultTemplate]=\"ur\" \n                [inputFormatter]=\"formatter\" [ngModelOptions]=\"{standalone: true}\"/>\n        </div>\n    </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-3 offset-sm-3\">\n      <button type=\"button\"  class=\"btn btn-info btn-sm\" (click)=\"updateTask(tasksResult._id)\" \n      [disabled]=\"!taskForm.form.valid\">Update </button> &nbsp;\n    </div>\n    <div class=\"col-sm-3\">\n      <a [routerLink]=\"['/viewtask']\" class=\"btn btn-dark btn-sm\">Cancel</a>\n    </div>\n  </div>\n\n</form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/task/update/update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/task/update/update.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/merge */ "./node_modules/rxjs-compat/_esm5/add/operator/merge.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../task */ "./src/app/task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// -- Load Service




var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(route, flashMessagesService, taskService, userService, projectService, router) {
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.taskService = taskService;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        this.tasksResult = new _task__WEBPACK_IMPORTED_MODULE_10__["Task"]();
        this.selectedTask = null;
        this.selectedProject = null;
        this.selectedParent = null;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getUser();
        this.TypeaheadUserSearch();
        this.TypeaheadProjectSearch();
        this.getTaskById(this.val);
    };
    UpdateComponent.prototype.getProjects = function () {
        var _this = this;
        return this.projectService.getProjectsList()
            .subscribe(function (data) {
            _this.projectsResult = data;
            console.log(_this.projectsResult);
        });
    };
    UpdateComponent.prototype.TypeaheadProjectSearch = function () {
        var _this = this;
        this.searchProject = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.projectsResult
                : _this.projectsResult.filter(function (v) { return v.project.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
        this.formatterProject = function (x) {
            return x.project;
        };
    };
    UpdateComponent.prototype.TypeaheadUserSearch = function () {
        var _this = this;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                : _this.usersResult.filter(function (tr) { return tr.first_name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) { return x.first_name; };
    };
    UpdateComponent.prototype.updateTask = function (id) {
        //alert(this.tasksResult.start_date);
        //alert(this.tasksResult.end_date);
        var _this = this;
        this.taskService.updateTask(id, this.tasksResult).subscribe(function (success) {
            _this.flashMessagesService.show('Task updated succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }); /**/
        this.router.navigate(['/viewtask']);
    };
    UpdateComponent.prototype.findbyID = function (id) {
        // return this.userService.retriveUsersById(id).subscribe(user => this.tasksResult.user = user);
    };
    UpdateComponent.prototype.getUser = function () {
        var _this = this;
        return this.userService.getUsersList()
            .subscribe(function (data) {
            _this.usersResult = data;
            console.log('usr: ' + _this.usersResult);
        });
    };
    UpdateComponent.prototype.getTaskById = function (val) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.taskService.getTasksById(params['id']).subscribe(function (res) {
                _this.tasksResult = res;
                /*
                  this.tasksResult.start_date = new Date(this.tasksResult.start_date);
                  this.tasksResult.end_date = new Date(this.tasksResult.end_date);
                  
                    if(this.tasksResult.start_date)
                  this.tasksResult.start_date = this.tasksResult.start_date.slice(0,10).split("-").reverse().join("/");
        
                  if(this.tasksResult.end_date)
                  this.tasksResult.end_date = this.tasksResult.end_date.slice(0,10).split("-").reverse().join("/");
        
                  */
                if (_this.tasksResult.start_date)
                    _this.tasksResult.start_date = _this.tasksResult.start_date;
                if (_this.tasksResult.end_date)
                    _this.tasksResult.end_date = _this.tasksResult.end_date;
                console.log(" task RES :" + _this.tasksResult);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
    ], UpdateComponent.prototype, "instance", void 0);
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/components/task/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/components/task/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesService"],
            _task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"],
            _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/task/view/view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/task/view/view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr#afterSearchView{\n    border: 1px dashed dimgrey;\n}\n\n\ntd#taskCell, td#parentTaskCell{\n    min-width: 100px;\n}\n\n\ntd#priorityCell{\n    min-width: 20px;\n}\n\n\ntd.dateCell, td.app-btn{\n    min-width: 40px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/task/view/view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/task/view/view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n        <h3 class=\"text-center\">\r\n        <font  style=\"height:5%;font-size: 14px;font-family: Verdana, Geneva, sans-serif;\" \r\n        color=\"#3f88b3\">\r\n        <b>Task List</b></font></h3>\r\n        <hr>\r\n        <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n        <label for=\"end_date\" class=\"col-sm-3 text-primary\"><strong>Search Project:</strong></label>\r\n            <div class=\"col-sm-5\">\r\n                    <input type=\"text\" class=\"form-control\"  #instance=\"ngbTypeahead\" \r\n                    (selectItem)=\"selectedItem($event)\"  [inputFormatter]=\"formatterProject\"\r\n                    [(ngModel)]=\"model\" [ngbTypeahead]=\"searchProject\" \r\n                    [resultFormatter]=\"formatterProject\" />\r\n            </div> \r\n            <div class=\"col-sm-4\">\r\n                    <button  type=\"button\" (click)=\"findTaskBySortProject('',model._id)\"\r\n                     class=\"btn btn-info btn-sm\">\r\n                    <span class=\"glyphicon glyphicon-search\"></span> Search\r\n                  </button>\r\n                &nbsp;\r\n                  <button id=\"reset\" (click)=\"reset()\"\r\n                  class=\"btn btn-warning btn-sm\"> Reset </button>\r\n             </div>\r\n        </div>\r\n   </div>\r\n</div>\r\n\r\n\r\n<div class=\"card\" >\r\n        <div class=\"card-body\" *ngIf=\"tasksResult; else templateName\">\r\n\r\n    <div class=\"form-group row\">\r\n            <label for=\"end_date\" class=\"col-sm-3 text-primary\"><strong>Sort:</strong></label>\r\n                    <div class=\"col-sm-9\">\r\n                    <button type=\"button\"  (click)=\"findTaskBySortProject('start_date',model._id)\"\r\n                    class=\"btn btn-secondary btn-sm\">\r\n                    <span class=\"glyphicon glyphicon-triangle-top\"></span> Start Date\r\n                    </button>\r\n                        &nbsp;\r\n                    <button type=\"button\"  (click)=\"findTaskBySortProject('end_date',model._id)\"\r\n                    class=\"btn btn-secondary btn-sm\">\r\n                    <span class=\"glyphicon glyphicon-sort\"></span> End Date\r\n                    </button>\r\n                    &nbsp;\r\n                    <button type=\"button\"  (click)=\"findTaskBySortProject('priority',model._id)\"\r\n                    class=\"btn btn-secondary btn-sm\">\r\n                    <span class=\"glyphicon glyphicon-sort\"></span> Priority\r\n                    </button>\r\n                    &nbsp;\r\n                    <button type=\"button\"  (click)=\"findTaskBySortProject('completed',model._id)\"\r\n                    class=\"btn btn-secondary btn-sm\">\r\n                    <span class=\"glyphicon glyphicon-sort\"></span> Completed\r\n                    </button>\r\n                </div>\r\n        </div>\r\n    <table class=\"table table-striped\" style =\"font-size:12px;\">\r\n        <thead>\r\n        <tr>\r\n           <td><b>Project</b></td> \r\n            <td><b>Task</b></td>\r\n            <td><b>Priority</b></td>\r\n            <td><b>Parent Task</b></td>\r\n            <td><b>Start Date</b></td>\r\n            <td><b>End Date</b></td>\r\n           <!-- <td><b>User</b></td> -->\r\n            <td colspan=\"2\"></td>\r\n        </tr>\r\n        </thead>\r\n         <tbody >\r\n      <tr *ngFor=\"let ul of tasksResult\">\r\n            <td>{{ ul.project | findprojectname : projectsResult }}</td> \r\n                <td>{{ ul.task }}</td>\r\n                <td>{{ ul.priority }}</td>\r\n                <td>{{ ul.parent_task | findtaskname : tasksResult }}</td>\r\n                <td>{{ ul.start_date | date:\"dd-MMM-yyyy\" }}</td>\r\n                <td>{{ ul.end_date | date:\"dd-MMM-yyyy\" }}</td>\r\n             <!--   <td>{{ ul.user | findusername : usersResult }}</td> -->\r\n        \r\n                <td><a [routerLink]=\"['/updatetask', ul._id]\" class='btn btn-info m-r-5px'>\r\n                    <span class='glyphicon glyphicon-edit'></span> Edit\r\n                </a></td>\r\n                <td><button (click)=\"deleteTask(ul._id)\"  class=\"btn btn-danger btn-sm\">End Task</button></td>\r\n        </tr>\r\n    </tbody>\r\n    </table>\r\n\r\n      \r\n</div>\r\n<ng-template #templateName>\r\n        <br> <div class=\"alert alert-info\">\r\n            <div class=\"row justify-content-around\">\r\n                     <p> <b> Please search projects to filter task.</b></p>\r\n            </div>\r\n        </div>\r\n</ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/components/task/view/view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/task/view/view.component.ts ***!
  \********************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/merge */ "./node_modules/rxjs-compat/_esm5/add/operator/merge.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../task */ "./src/app/task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ViewComponent = /** @class */ (function () {
    function ViewComponent(taskService, userService, projectService, router) {
        this.taskService = taskService;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.taskObj = new _task__WEBPACK_IMPORTED_MODULE_10__["Task"]();
        this.selectedProject = null;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getUser();
        this.TypeaheadProjectSearch();
    };
    ViewComponent.prototype.TypeaheadProjectSearch = function () {
        var _this = this;
        this.searchProject = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.focus$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return !_this.instance.isPopupOpen(); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.projectsResult
                : _this.projectsResult.filter(function (v) { return v.project.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
        this.formatterProject = function (x) { return x.project; };
    };
    ViewComponent.prototype.selectedItem = function (item) {
        this.clickedItem = item.item;
        console.log(item);
    };
    ViewComponent.prototype.reset = function () {
        window.location.reload();
    };
    ViewComponent.prototype.findTaskBySortProject = function (sortid, pid) {
        var _this = this;
        this.sortval = sortid;
        console.log('this.sorval' + this.sortval);
        console.log('not this.sorval' + this.sortval);
        if (this.sortval) {
            return this.taskService.getTasksBySortProjectId(sortid, pid)
                .subscribe(function (tasksResult) {
                console.log(tasksResult);
                _this.tasksResult = tasksResult;
            });
        }
        else {
            this.taskService.getTasksBySortProjectId('start_date', pid).subscribe(function (tasksResult) {
                console.log(tasksResult);
                _this.tasksResult = tasksResult;
            });
        }
    };
    ViewComponent.prototype.findAllTasks = function () {
        var _this = this;
        return this.taskService.getTasksList().subscribe(function (tasksResult) {
            console.log(tasksResult);
            _this.tasksResult = tasksResult;
        });
    };
    ViewComponent.prototype.getUser = function () {
        var _this = this;
        return this.userService.getUsersList()
            .subscribe(function (data) {
            _this.usersResult = data;
            console.log('user :' + _this.usersResult);
        });
    };
    ViewComponent.prototype.getProjects = function () {
        var _this = this;
        return this.projectService.getProjectsList()
            .subscribe(function (data) {
            _this.projectsResult = data;
            console.log('pro :' + _this.projectsResult);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
    ], ViewComponent.prototype, "instance", void 0);
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/components/task/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/components/task/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"],
            _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n        <h3 class=\"text-center\">\n                <font  style=\"height:5%;font-size: 14px;font-family: Verdana, Geneva, sans-serif;\" \n                color=\"#3f88b3\">\n                <b>Users </b></font></h3>\n                <hr>\n    <div class=\"card-body\">\n        <form #userForm=\"ngForm\">\n            <p *ngIf=\"message\" class=\"alert alert-success\"> {{message}}</p>\n                  <div class=\"form-group\">\n                    <label for=\"first_name\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"first_name\" \n                    placeholder=\"FirstName\"  required\n                    [(ngModel)]=\"user.first_name\" name=\"first_name\" #first_name=\"ngModel\">\n                    <div [hidden]=\"first_name.valid || first_name.pristine\"\n                         class=\"alert alert-danger\">\n                        First Name is required\n                    </div>\n                  </div>\n                  \n                  <div class=\"form-group\">\n                    <label for=\"lastname\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"last_name\" placeholder=\"LastName\"\n                    required\n                    [(ngModel)]=\"user.last_name\" name=\"last_name\" #last_name=\"ngModel\">\n                    <div [hidden]=\"last_name.valid || last_name.pristine\"\n                         class=\"alert alert-danger\">\n                        Last Name is required\n                    </div>\n                  </div>\n                  \n                  <div class=\"form-group\">\n                    <label for=\"employeeid\">Employee ID</label>\n                    <input type=\"number\" class=\"form-control\" id=\"employee_id\" \n                    placeholder=\"Employee ID\"\n                    required\n                    [(ngModel)]=\"user.employee_id\" name=\"employee_id\" #employee_id=\"ngModel\">\n                    <div [hidden]=\"employee_id.valid || employee_id.pristine\"\n                         class=\"alert alert-danger\">\n                         Employee ID is required\n                    </div>\n                  </div>\n                  \n                  <div class=\"btn-group btn-group-sm\">\n<span *ngIf=\"getCheckID\">\n<button type=\"button\"  class=\"btn btn-info\" (click)=\"updateUser()\" [disabled]=\"!userForm.form.valid\">Update </button> &nbsp;\n</span>\n<span *ngIf=\"!getCheckID\">\n<button type=\"button\"  class=\"btn btn-info\" (click)=\"adduser()\" [disabled]=\"!userForm.form.valid\">Add </button> &nbsp;\n</span>\n<button type=\"reset\" class=\"btn btn-dark\">Reset</button>\n                  </div>\n                </form>\n    </div>\n</div>\n\n<div class=\"card\" >\n        <div class=\"card-body\" *ngIf=\"userList; else templateName\">\n\n     <div class=\"input-group\">\n            <label>Sort :</label><p>&nbsp;</p>\n            \n            <span class=\"input-group-btn\">\n                <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search\"><p>&nbsp;</p>\n            </span><p>&nbsp;</p><p>&nbsp;</p>\n             <span class=\"input-group-btn\">\n                <button id=\"first_name\" (click)=\"getUsers('first_name')\"   class=\"btn btn-default\">First Name</button>\n              </span> <p>&nbsp;</p><p>&nbsp;</p>\n              <span class=\"input-group-btn\">\n                  <button id=\"last_name\" (click)=\"getUsers('last_name')\"  class=\"btn btn-default\">Last Name</button>\n                </span><p>&nbsp;</p><p>&nbsp;</p>\n                <span class=\"input-group-btn\">\n                    <button id=\"employee_id\" (click)=\"getUsers('employee_id')\"  class=\"btn btn-default\">Employee Id</button>\n                  </span>\n          </div>\n       \n\n\n    <table class=\"table table-hover\" style =\"font-size:12px;\">\n        <thead>\n        <tr>\n            <td><b>First Name</b></td>\n            <td><b>Last Name</b></td>\n            <td><b>Employee ID</b></td>\n            <td colspan=\"2\"></td>\n        </tr>\n        </thead>\n         <tbody *ngIf=\"userList\">\n       <tr *ngFor=\"let ul of userList | filter : {first_name: searchText, last_name:searchText,  employee_id: searchText}; let i=index;\">\n                <td>{{ ul.first_name }}</td>\n                <td>{{ ul.last_name }}</td>\n                <td>{{ ul.employee_id }}</td>\n                <td>\n                 <button (click)=\"findbyID(ul._id)\"  class=\"btn btn-info btn-xs\">Edit</button>\n                </td>\n                <td>\n                <button (click)=\"deleteUser(ul._id)\"  class=\"btn btn-danger btn-xs\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n      </table>\n</div>\n<ng-template #templateName>\n        <br> <div class=\"alert alert-info\">\n                                <div class=\"row justify-content-around\">\n                             <p>  <b> No Users Found. </b></p>\n                      </div>\n                </div>\n</ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(userService, location, flashMessagesService, router) {
        this.userService = userService;
        this.location = location;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.submitted = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers(this.sortval);
    };
    UserComponent.prototype.pageRefresh = function () {
        location.reload();
    };
    UserComponent.prototype.adduser = function () {
        var _this = this;
        this.submitted = true;
        this.userService.saveUser(this.user)
            .subscribe(function (success) {
            _this.flashMessagesService.show('User added succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
        location.reload();
    };
    UserComponent.prototype.updateUser = function () {
        var _this = this;
        this.submitted = true;
        this.userService.updateUser(this.getCheckID, this.user)
            .subscribe(function (success) {
            _this.flashMessagesService.show('User updated succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
        location.reload();
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.submitted = true;
        this.userService.deleteUser(id)
            .subscribe(function (success) {
            _this.flashMessagesService.show('User deleted succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
        location.reload();
    };
    UserComponent.prototype.findbyID = function (id) {
        var _this = this;
        this.getCheckID = id;
        this.userService.getUsersById(id)
            .subscribe(function (user) { return _this.user = user; });
    };
    UserComponent.prototype.getUsers = function (val) {
        var _this = this;
        this.sortval = val;
        if (this.sortval) {
            return this.userService.getSortedUsersList(this.sortval)
                .subscribe(function (userList) {
                console.log(userList);
                _this.userList = userList;
            });
        }
        else {
            return this.userService.getUsersList()
                .subscribe(function (userList) {
                console.log(userList);
                _this.userList = userList;
            });
        }
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/findprojectname.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/findprojectname.pipe.ts ***!
  \*****************************************/
/*! exports provided: FindprojectnamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindprojectnamePipe", function() { return FindprojectnamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FindprojectnamePipe = /** @class */ (function () {
    function FindprojectnamePipe() {
    }
    FindprojectnamePipe.prototype.transform = function (projectId, projects) {
        var projectRetrived = projects.filter(function (item) { return item._id == projectId; })[0];
        return !!projectRetrived ? projectRetrived.project : '-';
    };
    FindprojectnamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'findprojectname'
        })
    ], FindprojectnamePipe);
    return FindprojectnamePipe;
}());



/***/ }),

/***/ "./src/app/findtaskname.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/findtaskname.pipe.ts ***!
  \**************************************/
/*! exports provided: FindtasknamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindtasknamePipe", function() { return FindtasknamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FindtasknamePipe = /** @class */ (function () {
    function FindtasknamePipe() {
    }
    FindtasknamePipe.prototype.transform = function (taskId, tasks) {
        var taskRetrived = tasks.filter(function (task) { return task._id == taskId; })[0];
        return !!taskRetrived ? taskRetrived.task : '-';
    };
    FindtasknamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'findtaskname'
        })
    ], FindtasknamePipe);
    return FindtasknamePipe;
}());



/***/ }),

/***/ "./src/app/findusername.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/findusername.pipe.ts ***!
  \**************************************/
/*! exports provided: FindusernamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindusernamePipe", function() { return FindusernamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FindusernamePipe = /** @class */ (function () {
    function FindusernamePipe() {
    }
    FindusernamePipe.prototype.transform = function (userId, users) {
        var userRetrived = users.filter(function (user) { return user._id == userId; })[0];
        return !!userRetrived ? userRetrived.first_name : '-';
    };
    FindusernamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'findusername'
        })
    ], FindusernamePipe);
    return FindusernamePipe;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectUrl = 'http://localhost:4000/projects'; // URL to web api
    }
    ProjectService.prototype.saveProject = function (project) {
        return this.http.post(this.projectUrl + '/saveProject', project);
    };
    ProjectService.prototype.getProjectsList = function () {
        return this.http.get(this.projectUrl + '/projectList');
    };
    ProjectService.prototype.getSortedProjectsList = function (val) {
        var url = this.projectUrl + "/sortProject/" + val;
        return this.http.get(url);
    };
    ProjectService.prototype.getProjectsById = function (id) {
        var url = this.projectUrl + "/getProject/" + id;
        return this.http.get(url);
    };
    ProjectService.prototype.deleteProject = function (id) {
        var url = this.projectUrl + "/deleteProject/" + id;
        return this.http.delete(url);
    };
    ProjectService.prototype.updateProject = function (id, project) {
        var url = this.projectUrl + "/updateProject/" + id;
        return this.http.put(url, project);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.tasksUrl = 'http://localhost:4000/tasks'; // URL to web api
    }
    TaskService.prototype.saveTask = function (task) {
        return this.http.post(this.tasksUrl + '/saveTask', task);
    };
    TaskService.prototype.getTasksList = function () {
        return this.http.get(this.tasksUrl + '/TaskList');
    };
    TaskService.prototype.getSortedTasksList = function (val) {
        var url = this.tasksUrl + "/sortTask/" + val;
        return this.http.get(url);
    };
    TaskService.prototype.getTasksById = function (id) {
        var url = this.tasksUrl + "/getTaskById/" + id;
        return this.http.get(url);
    };
    TaskService.prototype.getTasksByProjectId = function (id) {
        var url = this.tasksUrl + "/getTaskByProject/" + id;
        return this.http.get(url);
    };
    TaskService.prototype.getTasksBySortProjectId = function (sort, id) {
        console.log('sort' + sort);
        console.log('id -' + id);
        var url = this.tasksUrl + "/getTaskBySortedProject/" + sort + "/" + id;
        return this.http.get(url);
    };
    TaskService.prototype.deleteTask = function (id) {
        var url = this.tasksUrl + "/deleteTask/" + id;
        return this.http.delete(url);
    };
    TaskService.prototype.updateTask = function (id, task) {
        var url = this.tasksUrl + "/updateTask/" + id;
        return this.http.put(url, task);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task.ts":
/*!*************************!*\
  !*** ./src/app/task.ts ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:4000/users'; // URL to web api
    }
    UserService.prototype.saveUser = function (user) {
        return this.http.post(this.usersUrl + '/saveUser', user);
    };
    UserService.prototype.getUsersList = function () {
        return this.http.get(this.usersUrl + '/userList');
    };
    UserService.prototype.getSortedUsersList = function (val) {
        var url = this.usersUrl + "/sortUser/" + val;
        return this.http.get(url);
    };
    UserService.prototype.getUsersById = function (id) {
        var url = this.usersUrl + "/getUser/" + id;
        return this.http.get(url);
    };
    UserService.prototype.deleteUser = function (id) {
        var url = this.usersUrl + "/deleteUser/" + id;
        return this.http.delete(url);
    };
    UserService.prototype.updateUser = function (id, user) {
        var url = this.usersUrl + "/updateUser/" + id;
        return this.http.put(url, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map