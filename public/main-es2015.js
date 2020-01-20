(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-list/edit-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-list/edit-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content vertical-center\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Edit list\n    </h1>\n\n    <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name...\">\n    <br><br>\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"updateList(listTitleInput.value)\">Save</button>\n    </div>\n\n    \n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-task/edit-task.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-task/edit-task.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content vertical-center\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Edit task\n    </h1>\n\n    <input\n      #taskTitleInput\n      class=\"input has-background-light is-medium\"\n      type=\"text\"\n      placeholder=\"Enter task name...\"\n    />\n    <br /><br />\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button\n        class=\"button is-primary has-text-white is-medium\"\n        (click)=\"updateTask(taskTitleInput.value)\"\n      >\n        Save\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"centered-content vertical-center\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Edit task\n    </h1>\n\n    <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name...\">\n    <br><br>\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"updateTask(taskTitleInput.value)\">Save</button>\n    </div>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content vertical-center\">\n  <div class=\"white-box\">\n\n    <h1 class=\"title has-text-primary\">Login</h1>\n    \n    <div class=\"field\">\n      <p class=\"control has-icons-left has-icons-right\">\n        <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-envelope\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\">\n      <p class=\"control has-icons-left\">\n        <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-lock\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\" style=\"display: flex; justify-content: flex-end \">\n      <p class=\"control\">\n        <button class=\"button is-primary has-text-white\" (click)=\"onLoginButtonClicked(emailInput.value, pwInput.value)\">\n          Login\n        </button>\n      </p>\n    </div>\n\n    <br>\n\n    <p class=\"has-text-grey\" style=\"text-align: center;\">Not have an account? <a routerLink='/signup'>Sign up</a> now! </p>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-list/new-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-list/new-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content vertical-center\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Create a new list\n    </h1>\n\n    <input #listTitleInput class=\"input  has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name...\">\n    <br><br> \n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"createList(listTitleInput.value)\">Create</button>\n    </div>\n\n   </div>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-task/new-task.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-task/new-task.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content vertical-center\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Create a new Task\n    </h1>\n\n    <input #taskTitleInput class=\"input  has-background-light is-medium\" type=\"text\" placeholder=\"Enter Task name...\">\n    <br><br> \n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"createTask(taskTitleInput.value)\">Create</button>\n    </div>\n\n   </div>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content vertical-center\">\n  <div class=\"white-box\">\n\n    <h1 class=\"title has-text-primary\">Sign up</h1>\n    \n    <div class=\"field\">\n      <p class=\"control has-icons-left has-icons-right\">\n        <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-envelope\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\">\n      <p class=\"control has-icons-left\">\n        <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-lock\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\" style=\"display: flex; justify-content: flex-end \">\n      <p class=\"control\">\n        <button class=\"button is-primary has-text-white\" (click)=\"onSignupButtonClicked(emailInput.value, pwInput.value)\">\n          Sign up\n        </button>\n      </p>\n    </div>\n\n    <br>\n\n    <p class=\"has-text-grey\" style=\"text-align: center;\">Already have an account? <a routerLink='/login'>Login</a> now! </p>\n\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-view/task-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-view/task-view.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"profile\">\n    <i class=\"fa-user\"></i>\n  </div>\n  <div class=\"centered-content vertical-center\">\n    <div class=\"task-manager-container\">\n      <div class=\"sidebar has-background-white\">\n        <h1 class=\"title title-list has-text-primary\">\n          Lists\n        </h1>\n\n        <div class=\"list-menu-scroll\" id=\"scroll-list\">\n          <div class=\"list-menu\">\n            <a\n              class=\"list-menu-item\"\n              *ngFor=\"let list of lists\"\n              [routerLink]=\"['/lists', list._id]\"\n              routerLinkActive=\"is-active\"\n            >\n              <p>{{ list.title }}</p>\n            </a>\n          </div>\n        </div>\n\n        <button\n          class=\"button button-list is-primary has-text-white\"\n          routerLink=\"/new-list\"\n        >\n          + New List\n        </button>\n      </div>\n\n      <div class=\"task-list-container  has-background-light\">\n        <div *ngIf=\"tasks\">\n          <div class=\"top-bar\">\n            <h1 class=\"title title-task has-text-primary\">\n              Tasks\n            </h1>\n            <div class=\"dropdown is-hoverable is-right\">\n              <div class=\"dropdown-trigger\">\n                <button class=\"button\" aria-haspopup=\"true\">\n                  <span class=\"icon is-small\">\n                    <i class=\"fas fa-bars\"></i>\n                  </span>\n                </button>\n              </div>\n              <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n                <div class=\"dropdown-content\">\n                  <a\n                    [routerLink]=\"['/edit-list', selectedListId]\"\n                    class=\"dropdown-item\"\n                  >\n                    Edit list\n                  </a>\n                  <a\n                    (click)=\"onDeleteListClick()\"\n                    class=\"dropdown-item has-text-danger\"\n                  >\n                    Delete list\n                  </a>\n                  <a\n                    (click)=\"onLogoutClick()\"\n                    class=\"dropdown-item\"\n                    id=\"logout-link\"\n                  >\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                    Log out\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Task elements -->\n          <div class=\"task-menu-scroll\" id=\"scroll-task\">\n            <div\n              class=\"task\"\n              *ngFor=\"let task of tasks\"\n              (click)=\"onTaskClick(task)\"\n              [ngClass]=\"{ completed: task.completed }\"\n            >\n              <div class=\"task-text\">\n                <p>{{ task.title }}</p>\n              </div>\n\n              <div class=\"task-buttons\">\n                <button\n                  class=\"button\"\n                  [routerLink]=\"[\n                    '/lists',\n                    selectedListId,\n                    'edit-task',\n                    task._id\n                  ]\"\n                >\n                  <div class=\"icon edit\">\n                    <i class=\"fas fa-edit\"></i>\n                  </div>\n                </button>\n                <button class=\"button\" (click)=\"onDeleteTaskClick(task._id)\">\n                  <div class=\"icon trash\">\n                    <i class=\"fas fa-trash\"></i>\n                  </div>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"tasks.length === 0\">\n            <h3 class=\"empty-state-text empty-task\">\n              No tasks available. <br />\n              click <i class=\"fa fa-plus\"></i> button to add a new task\n            </h3>\n          </div>\n\n          <button\n            class=\"circle-add-button button is-primary\"\n            routerLink=\"./new-task\"\n          >\n            <!-- <fa name=\"fas fa-plus\"></fa> -->\n            <i class=\"fas fa-plus\"></i>\n          </button>\n        </div>\n        <div *ngIf=\"!tasks\">\n          <h3 class=\"empty-state-text\">\n            Please select a list to view the tasks\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");










const routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    { path: 'new-list', component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__["NewListComponent"] },
    { path: 'edit-list/:listId', component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__["EditListComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"] },
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"] },
    { path: 'lists', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
    { path: 'lists/:listId', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
    { path: 'lists/:listId/new-task', component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"] },
    { path: 'lists/:listId/edit-task/:taskId', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web-req.interceptor */ "./src/app/web-req.interceptor.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_8__["TaskViewComponent"],
            _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_9__["NewListComponent"],
            _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskComponent"],
            _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"],
            _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_13__["SignupPageComponent"],
            _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_14__["EditListComponent"],
            _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_15__["EditTaskComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_12__["WebReqInterceptor"],
                multi: true
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(webService, router, http) {
        this.webService = webService;
        this.router = router;
        this.http = http;
    }
    login(email, password) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            // the auth tokens will be in the header of this response
            this.setSession(res.body._id, res.headers.get("x-access-token"), res.headers.get("x-refresh-token"));
            console.log("LOGGED IN!");
        }));
    }
    signup(email, password) {
        return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            // the auth tokens will be in the header of this response
            this.setSession(res.body._id, res.headers.get("x-access-token"), res.headers.get("x-refresh-token"));
            console.log("Successfully signed up and now Logged in!");
        }));
    }
    logout() {
        this.removeSession();
        this.router.navigate(["/login"]);
    }
    getAccessToken() {
        return localStorage.getItem("x-access-token");
    }
    getRefreshToken() {
        return localStorage.getItem("x-refresh-token");
    }
    getUserId() {
        return localStorage.getItem("user-id");
    }
    setAccessToken(accessToken) {
        localStorage.setItem("x-access-token", accessToken);
    }
    setSession(userId, accessToken, refreshToken) {
        localStorage.setItem("user-id", userId);
        localStorage.setItem("x-access-token", accessToken);
        localStorage.setItem("x-refresh-token", refreshToken);
    }
    removeSession() {
        localStorage.removeItem("user-id");
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("x-refresh-token");
    }
    getNewAccessToken() {
        return this.http
            .get(`${this.webService.ROOT_URL}/users/me/access-token`, {
            // .get(`users/me/access-token`, {
            headers: {
                "x-refresh-token": this.getRefreshToken(),
                _id: this.getUserId()
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            this.setAccessToken(res.headers.get("x-access-token"));
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtbGlzdC9lZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
  \********************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");




let EditListComponent = class EditListComponent {
    constructor(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params.listId;
            console.log(params.listId);
        });
    }
    updateList(title) {
        this.taskService.updateList(this.listId, title).subscribe(() => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
};
EditListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-list/edit-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-list.component.scss */ "./src/app/pages/edit-list/edit-list.component.scss")).default]
    })
], EditListComponent);



/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");




let EditTaskComponent = class EditTaskComponent {
    constructor(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.taskId = params.taskId;
            this.listId = params.listId;
        });
    }
    updateTask(title) {
        this.taskService.updateTask(this.listId, this.taskId, title).subscribe(() => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
};
EditTaskComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-task/edit-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/pages/edit-task/edit-task.component.scss")).default]
    })
], EditTaskComponent);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginPageComponent = class LoginPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onLoginButtonClicked(email, password) {
        this.authService
            .login(email, password)
            .subscribe((res) => {
            if (res.status === 200) {
                // we have logged in successfully
                this.router.navigate(['/lists']);
            }
            console.log(res);
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1saXN0L25ldy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.ts ***!
  \******************************************************/
/*! exports provided: NewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListComponent", function() { return NewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewListComponent = class NewListComponent {
    constructor(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() { }
    createList(title) {
        this.taskService.createList(title).subscribe((list) => {
            console.log(list);
            // navigate to /lists/response._id
            this.router.navigate(["/lists", list._id]);
        });
    }
};
NewListComponent.ctorParameters = () => [
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-list/new-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-list.component.scss */ "./src/app/pages/new-list/new-list.component.scss")).default]
    })
], NewListComponent);



/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.ts ***!
  \******************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewTaskComponent = class NewTaskComponent {
    constructor(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params["listId"];
            // console.log(this.listId);
        });
    }
    createTask(title) {
        this.taskService
            .createTask(title, this.listId)
            .subscribe((newTask) => {
            this.router.navigate(["../"], { relativeTo: this.route });
        });
    }
};
NewTaskComponent.ctorParameters = () => [
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new-task",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-task/new-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-task.component.scss */ "./src/app/pages/new-task/new-task.component.scss")).default]
    })
], NewTaskComponent);



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupPageComponent = class SignupPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onSignupButtonClicked(email, password) {
        this.authService
            .signup(email, password)
            .subscribe((res) => {
            if (res.status === 200) {
                // we have logged in successfully
                this.router.navigate(['/lists']);
            }
            console.log(res);
        });
    }
};
SignupPageComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/pages/signup-page/signup-page.component.scss")).default]
    })
], SignupPageComponent);



/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  background: -webkit-gradient(linear, left bottom, right top, from(rgba(20, 41, 87, 0.842)), to(rgba(35, 71, 139, 0.918)));\n  background: linear-gradient(to right top, rgba(20, 41, 87, 0.842), rgba(35, 71, 139, 0.918));\n  font-family: \"Roboto\";\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.centered-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 80%;\n}\n\n.vertical-center {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 600px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n\n.title {\n  font-family: \"arial\";\n  font-size: 22px;\n  font-weight: bold;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n.white-box {\n  padding: 40px;\n  background: white;\n  border-radius: 5px;\n  width: 400px;\n}\n\n* {\n  font-family: \"Segoe UI\";\n}\n\n.task-manager-container {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n}\n\n.sidebar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 250px;\n  background: #ffffff;\n  padding: 30px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n\n.task-list-container {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 30px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.task-list-container .top-bar {\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.task-list-container .top-bar .title {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  margin: 0;\n}\n\n.list-menu-scroll {\n  padding-right: 20px;\n  width: 200px;\n  height: 100%;\n  margin-top: 0px;\n  margin-bottom: 40px;\n  overflow-y: scroll;\n}\n\n#scroll-list::-webkit-scrollbar {\n  width: 6px;\n  background: rgba(255, 255, 255, 0);\n}\n\n#scroll-list::-webkit-scrollbar-thumb {\n  z-index: 10000;\n  background-color: #b9b9b9;\n}\n\n#scroll-list::-webkit-scrollbar-track {\n  box-shadow: none;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.list-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 4px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  font-size: 16px;\n}\n\n.list-menu .list-menu-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 8px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n  background: #f3f3f3;\n}\n\n.list-menu .list-menu-item:hover {\n  background: #ebebeb;\n}\n\n.list-menu .list-menu-item.is-active {\n  background: #8ca8d4;\n  color: white;\n}\n\n.button-list {\n  margin-top: -20px;\n}\n\n.task {\n  display: -webkit-box;\n  display: flex;\n  background: white;\n  padding: 4px 20px;\n  border-radius: 5px;\n  margin-top: 6px;\n  font-size: 16px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.task:not(.complete) {\n  cursor: pointer;\n  -webkit-transition: box-shadow 0.2s ease, -webkit-transform 0.2s ease;\n  transition: box-shadow 0.2s ease, -webkit-transform 0.2s ease;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  transition: box-shadow 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n\n.task:not(.complete):active {\n  -webkit-transform: scale(0.99);\n          transform: scale(0.99);\n}\n\n.task:not(.complete):hover {\n  box-shadow: 0 0 0 5px #ebebeb;\n}\n\n.task:not(.complete):hover .task-buttons {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.task.completed .task-text {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n\n.task .task-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.task .task-buttons {\n  -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: opacity 0.2s, transform 0.2s;\n  transition: opacity 0.2s, transform 0.2s, -webkit-transform 0.2s;\n  opacity: 0;\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n}\n\n.task .task-buttons button {\n  background: none;\n  border: none;\n}\n\n.task .task-buttons .icon {\n  margin-left: 0px;\n  background: white;\n  color: #344b75;\n}\n\n.task .task-buttons .trash {\n  color: #ee6262;\n}\n\n.task-menu-scroll {\n  padding: 10px 30px 20px 30px;\n  margin-top: -10px;\n  height: 350px;\n  margin-bottom: 60px;\n  overflow-y: scroll;\n}\n\n#scroll-task::-webkit-scrollbar {\n  width: 6px;\n  background: rgba(255, 255, 255, 0);\n}\n\n#scroll-task::-webkit-scrollbar-thumb {\n  z-index: 10000;\n  background-color: #b9b9b9;\n}\n\n#scroll-task::-webkit-scrollbar-track {\n  box-shadow: none;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.circle-add-button {\n  position: absolute;\n  bottom: 30px;\n  right: 30px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.empty-state-text {\n  z-index: 100000000;\n  position: relative;\n  margin-top: 220px;\n  font-size: 18px;\n  color: silver;\n  text-align: center;\n}\n\n.empty-task {\n  top: -250px;\n  margin-top: 0px;\n}\n\n.dropdown-content {\n  position: fixed;\n  width: 180px;\n  background: white;\n}\n\n.dropdown-content a {\n  background: white;\n  margin: 4px auto;\n  width: 160px;\n  border-radius: 4px;\n}\n\n.dropdown-content a:hover {\n  background: #f8f8f8;\n}\n\n.dropdown-content #logout-link {\n  background: #263c61;\n  color: white;\n}\n\n.title-list {\n  text-decoration: underline;\n}\n\n.title-task {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L0M6XFxVc2Vyc1xcRGVsbFxcRGVza3RvcFxcV2ViRGV2XFxQcm9qZWN0c1xcTG9jYWwgUHJvamVjdHNcXHRhc2stbWFuYWdlclxcZnJvbnRlbmQvc3JjXFxtYWluLXN0eWxlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy9DOlxcVXNlcnNcXERlbGxcXERlc2t0b3BcXFdlYkRldlxcUHJvamVjdHNcXExvY2FsIFByb2plY3RzXFx0YXNrLW1hbmFnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcdGFzay12aWV3XFx0YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBO0VBQ0UseUhBQUE7RUFBQSw0RkFBQTtFQUNBLHFCQWJjO0FDUGhCOztBRHVCQTtFQUNFLFlBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3BCRjs7QURzQkE7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3BCRjs7QUM1Q0E7RUFDRSx1QkFBQTtBRCtDRjs7QUM1Q0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUQrQ0Y7O0FDNUNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUQrQ0Y7O0FDNUNBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBRCtDRjs7QUM1Q0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBRDhDSjs7QUM3Q0k7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxTQUFBO0FEK0NOOztBQzFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7QUQ2Q0Y7O0FDM0NBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEOENGOztBQzVDQTtFQUNFLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSx3Q0FBQTtBRCtDRjs7QUM1Q0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsZUFBQTtBRCtDRjs7QUM3Q0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkY1RUk7QUMySFI7O0FDN0NJO0VBQ0UsbUJBQUE7QUQrQ047O0FDNUNJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEOENOOztBQ3pDQTtFQUdFLGlCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRDBDRjs7QUN4Q0U7RUFDRSxlQUFBO0VBQ0EscUVBQUE7RUFBQSw2REFBQTtFQUFBLHFEQUFBO0VBQUEsa0ZBQUE7QUQwQ0o7O0FDeENJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBRDBDTjs7QUN2Q0k7RUFDRSw2QkFBQTtBRHlDTjs7QUN2Q007RUFDRSxVQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBRHlDUjs7QUNwQ0U7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QURzQ0o7O0FDbkNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FEcUNKOztBQ25DRTtFQUNFLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QURxQ0o7O0FDbENFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FEb0NKOztBQ2xDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEb0NKOztBQ2xDRTtFQUNFLGNBQUE7QURvQ0o7O0FDaENBO0VBRUUsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEa0NGOztBQy9CQTtFQUNFLFVBQUE7RUFDQSxrQ0FBQTtBRGtDRjs7QUNoQ0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QURtQ0Y7O0FDakNBO0VBQ0UsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLHdDQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURvQ0Y7O0FDakNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QURvQ0Y7O0FDakNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEb0NGOztBQ2xDQTtFQUNFLG1CQUFBO0FEcUNGOztBQ25DQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRHNDRjs7QUNuQ0E7RUFDRSwwQkFBQTtBRHNDRjs7QUNwQ0E7RUFDRSwwQkFBQTtBRHVDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgc3R5bGVzIGFuZCBWYXJpYWJsZXNcclxuXHJcbiRpbmRpZ286IHJnYmEoMjMsIDI5LCA1MSwgMC44Nyk7XHJcbiRibHVlOiByZ2JhKDIwLCA0MSwgODcsIDAuODQyKTtcclxuJGxpZ2h0LWJsdWU6IHJnYmEoMzUsIDcxLCAxMzksIDAuOTE4KTtcclxuJGRhcmstYmx1ZTogcmdiYSg5LCAzNSwgOTIsIDAuOTA0KTtcclxuJGxpZ2h0OiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcblxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXJvYm90bzogJ1JvYm90byc7XHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJGxpbms6ICRsaWdodC1ibHVlO1xyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyBTZXR0aW5nIGN1c3RvbSBHbG9iYWwgc3R5bGVzIChhcHBsaWVkIGZvciB0aGUgd2hvbGUgYXBwbGljYXRpb24pXHJcblxyXG5odG1sIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAkYmx1ZSwgJGxpZ2h0LWJsdWUpO1xyXG4gIGZvbnQtZmFtaWx5OiAkZmFtaWx5LXJvYm90bztcclxufVxyXG5cclxuaHRtbCwgYm9keXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAvLyBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ubW9kYWwtYm94e1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDM1cHg7XHJcbn0gIFxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiAnYXJpYWwnO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi53aGl0ZS1ib3h7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59IiwiaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsIHJnYmEoMjAsIDQxLCA4NywgMC44NDIpLCByZ2JhKDM1LCA3MSwgMTM5LCAwLjkxOCkpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubW9kYWwtYm94IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJhcmlhbFwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud2hpdGUtYm94IHtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbn1cblxuLnRhc2stbWFuYWdlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWF4LWhlaWdodDogNjgwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbn1cblxuLnRhc2stbGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cbi50YXNrLWxpc3QtY29udGFpbmVyIC50b3AtYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YXNrLWxpc3QtY29udGFpbmVyIC50b3AtYmFyIC50aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1tZW51LXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuI3Njcm9sbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbiNzY3JvbGwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbn1cblxuI3Njcm9sbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5saXN0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM4Y2E4ZDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhc2s6bm90KC5jb21wbGV0ZSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuLnRhc2s6bm90KC5jb21wbGV0ZSk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbn1cbi50YXNrOm5vdCguY29tcGxldGUpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNlYmViZWI7XG59XG4udGFzazpub3QoLmNvbXBsZXRlKTpob3ZlciAudGFzay1idXR0b25zIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi50YXNrLmNvbXBsZXRlZCAudGFzay10ZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi50YXNrIC50YXNrLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4udGFzayAudGFzay1idXR0b25zIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbn1cbi50YXNrIC50YXNrLWJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuLnRhc2sgLnRhc2stYnV0dG9ucyAuaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzM0NGI3NTtcbn1cbi50YXNrIC50YXNrLWJ1dHRvbnMgLnRyYXNoIHtcbiAgY29sb3I6ICNlZTYyNjI7XG59XG5cbi50YXNrLW1lbnUtc2Nyb2xsIHtcbiAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuI3Njcm9sbC10YXNrOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbiNzY3JvbGwtdGFzazo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbn1cblxuI3Njcm9sbC10YXNrOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5jaXJjbGUtYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZW1wdHktc3RhdGUtdGV4dCB7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogc2lsdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbXB0eS10YXNrIHtcbiAgdG9wOiAtMjUwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA0cHggYXV0bztcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG4uZHJvcGRvd24tY29udGVudCAjbG9nb3V0LWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMjYzYzYxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZS1saXN0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50aXRsZS10YXNrIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL21haW4tc3R5bGUuc2Nzc1wiO1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxufVxyXG5cclxuLnRhc2stbWFuYWdlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDY4MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnRhc2stbGlzdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIC8vIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gIC50b3AtYmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1tZW51LXNjcm9sbCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuI3Njcm9sbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcbiNzY3JvbGwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWI5Yjk7XHJcbn1cclxuI3Njcm9sbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi5saXN0LW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgLmxpc3QtbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOGNhOGQ0O1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1saXN0IHtcclxuICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLy8gYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOm5vdCguY29tcGxldGUpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNlYmViZWI7XHJcblxyXG4gICAgICAudGFzay1idXR0b25zIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuY29tcGxldGVkIC50YXNrLXRleHQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAudGFzay10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIC50YXNrLWJ1dHRvbnMge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xyXG4gIH1cclxuXHJcbiAgLnRhc2stYnV0dG9ucyBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgLnRhc2stYnV0dG9ucyAuaWNvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogcmdiKDUyLCA3NSwgMTE3KTtcclxuICB9XHJcbiAgLnRhc2stYnV0dG9ucyAudHJhc2h7XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgOTgsIDk4KTtcclxuICB9XHJcbn1cclxuXHJcbi50YXNrLW1lbnUtc2Nyb2xsIHtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jc2Nyb2xsLXRhc2s6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuI3Njcm9sbC10YXNrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcclxufVxyXG4jc2Nyb2xsLXRhc2s6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLmNpcmNsZS1hZGQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZS10ZXh0IHtcclxuICB6LWluZGV4OiAxMDAwMDAwMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDIyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcHR5LXRhc2sge1xyXG4gIHRvcDogLTI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGF7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG1hcmdpbjogNHB4IGF1dG87XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCAjbG9nb3V0LWxpbmt7XHJcbiAgYmFja2dyb3VuZDogcmdiKDM4LCA2MCwgOTcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlLWxpc3R7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnRpdGxlLXRhc2t7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.ts ***!
  \********************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TaskViewComponent = class TaskViewComponent {
    constructor(taskService, authService, route, router) {
        this.taskService = taskService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.listId) {
                this.selectedListId = params.listId;
                this.taskService.getTasks(params.listId).subscribe((tasks) => {
                    this.tasks = tasks;
                });
            }
            else {
                this.tasks = undefined;
            }
        });
        this.taskService.getLists().subscribe((lists) => {
            this.lists = lists;
        });
    }
    onTaskClick(task) {
        // we want to set the task to completed
        this.taskService.complete(task).subscribe(() => {
            // the task has been set to completed successfully
            console.log("Completed successully!");
            task.completed = !task.completed;
        });
    }
    onDeleteListClick() {
        this.taskService.deleteList(this.selectedListId).subscribe((res) => {
            this.router.navigate(['/lists']);
            console.log(res);
        });
    }
    onDeleteTaskClick(id) {
        this.taskService.deleteTask(this.selectedListId, id).subscribe((res) => {
            this.tasks = this.tasks.filter(val => val._id !== id);
            console.log(res);
        });
    }
    onLogoutClick() {
        this.authService.logout();
    }
};
TaskViewComponent.ctorParameters = () => [
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TaskViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-view/task-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-view.component.scss */ "./src/app/pages/task-view/task-view.component.scss")).default]
    })
], TaskViewComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");



let TaskService = class TaskService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getLists() {
        return this.webReqService.get('lists');
    }
    createList(title) {
        // We want to send a web request to create a list
        return this.webReqService.post('lists', { title });
    }
    updateList(id, title) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`lists/${id}`, { title });
    }
    updateTask(listId, taskId, title) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
    }
    deleteTask(listId, taskId) {
        return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
    }
    deleteList(id) {
        return this.webReqService.delete(`lists/${id}`);
    }
    getTasks(listId) {
        return this.webReqService.get(`lists/${listId}/tasks`);
    }
    createTask(title, listId) {
        // We want to send a web request to create a task
        return this.webReqService.post(`lists/${listId}/tasks`, { title });
    }
    complete(task) {
        return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
            completed: !task.completed
        });
    }
};
TaskService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/app/web-req.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/web-req.interceptor.ts ***!
  \****************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WebReqInterceptor = class WebReqInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    intercept(request, next) {
        // Handle the request
        request = this.addAuthHeader(request);
        // call next() and handle the response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401) {
                // 401 error so we are unauthorized
                // refresh the access token
                return this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
                    request = this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                    console.log(err);
                    this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request to refresh the access token
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
                console.log("Access Token Refreshed!");
                this.refreshingAccessToken = false;
                this.accessTokenRefreshed.next();
            }));
        }
    }
    addAuthHeader(request) {
        // get the access token
        const token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    }
};
WebReqInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
WebReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebReqInterceptor);



/***/ }),

/***/ "./src/app/web-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WebRequestService = class WebRequestService {
    constructor(http) {
        this.http = http;
        // this.ROOT_URL = "http://localhost:3000";
        // this.ROOT_URL = "http://localhost:8080";
        // this.ROOT_URL;
    }
    // get(uri: string) {
    //   return this.http.get(`${this.ROOT_URL}/${uri}`);
    // }
    // post(uri: string, payload: Object) {
    //   return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    // }
    // patch(uri: string, payload: Object) {
    //   return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    // }
    // delete(uri: string) {
    //   return this.http.delete(`${this.ROOT_URL}/${uri}`);
    // }
    // login(email: string, password: string) {
    //   return this.http.post(
    //     `${this.ROOT_URL}/users/login`,
    //     {
    //       email,
    //       password
    //     },
    //     {
    //       observe: "response"
    //     }
    //   );
    // }
    // signup(email: string, password: string) {
    //   return this.http.post(
    //     `${this.ROOT_URL}/users`,
    //     {
    //       email,
    //       password
    //     },
    //     {
    //       observe: "response"
    //     }
    //   );
    // }
    // get(uri: string) {
    //   return this.http.get(`${uri}`);
    // }
    // post(uri: string, payload: Object) {
    //   return this.http.post(`${uri}`, payload);
    // }
    // patch(uri: string, payload: Object) {
    //   return this.http.patch(`${uri}`, payload);
    // }
    // delete(uri: string) {
    //   return this.http.delete(`${uri}`);
    // }
    // login(email: string, password: string) {
    //   return this.http.post(
    //     `users/login`,
    //     {
    //       email,
    //       password
    //     },
    //     {
    //       observe: "response"
    //     }
    //   );
    // }
    // signup(email: string, password: string) {
    //   return this.http.post(
    //     `users`,
    //     {
    //       email,
    //       password
    //     },
    //     {
    //       observe: "response"
    //     }
    //   );
    // }
    get(uri) {
        return this.http.get(uri);
    }
    post(uri, payload) {
        return this.http.post(uri, payload);
    }
    patch(uri, payload) {
        return this.http.patch(uri, payload);
    }
    delete(uri) {
        return this.http.delete(uri);
    }
    login(email, password) {
        return this.http.post('users/login', {
            email,
            password
        }, {
            observe: "response"
        });
    }
    signup(email, password) {
        return this.http.post('users', {
            email,
            password
        }, {
            observe: "response"
        });
    }
};
WebRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], WebRequestService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\WebDev\Projects\Local Projects\task-manager\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map