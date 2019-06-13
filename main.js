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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <todo-list></todo-list>\n</div>\n\n\n\n<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-input {\n    width: 100%;\n    padding: 10px 18px;\n    font-size: 18px;\n    margin-bottom: 16px;\n}\n\n.todo-item {\n    margin-bottom: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    -webkit-animation-duration: 0.3s;\n            animation-duration: 0.3s;\n}\n\n.remove-item {\n    cursor: pointer;\n    margin-left: 14px;\n}\n\n.todo-item-left {\n    display: flex;\n    align-items: center;\n}\n\n.todo-item-label {\n    padding: 10px;\n    border: 1px solid white;\n    margin-left: 12px;\n}\n\n.todo-item-edit {\n    font-size: 24px;\n    color: #2c3e50;\n    margin-left: 12px;\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\n    /* &:focus {\n      outline: none;\n    }*/\n}\n\n.completed {\n    text-decoration: line-through;\n    color: grey;\n}\n\n.extra-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 16px;\n    border-top: 1px solid lightgrey;\n    padding-top: 14px;\n    margin-bottom: 14px;\n}\n\nbutton {\n    font-size: 14px;\n    background-color: white;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    /* &:hover {\n      background: lightgreen;\n    } */\n    /* &:focus {\n      outline: none;\n    } */\n}\n\n.active {\n    background: lightgreen;\n}\n\n.fade-enter-active,\n.fade-leave-active {\n    transition: opacity .2s;\n}\n\n.fade-enter,\n.fade-leave-to {\n    opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtREFBbUQ7SUFDbkQ7O01BRUU7QUFDTjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCOztPQUVHO0lBQ0g7O09BRUc7QUFDUDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udG9kby1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG4ucmVtb3ZlLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLnRvZG8taXRlbS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvLWl0ZW0tbGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi50b2RvLWl0ZW0tZWRpdCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLyogJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH0qL1xufVxuXG4uY29tcGxldGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLmV4dHJhLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC8qICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbiAgICB9ICovXG4gICAgLyogJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH0gKi9cbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cblxuLmZhZGUtZW50ZXItYWN0aXZlLFxuLmZhZGUtbGVhdmUtYWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbn1cblxuLmZhZGUtZW50ZXIsXG4uZmFkZS1sZWF2ZS10byB7XG4gICAgb3BhY2l0eTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"todo-input\" placeholder=\"What needs to be done\" [(ngModel)]=\"todoTitle\" (keyup.enter)=\"addTodo()\">\n\n<div class=\"todo-item\" *ngFor=\"let todo of todosFiltered()\" @fade>\n    <div class=\"todo-item-left\">\n        <input type=\"checkbox\" [(ngModel)]=\"todo.completed\" (change)=\"doneEdit(todo)\">\n        <div *ngIf=\"!todo.editing; else editingTodo\" class=\"todo-item-label\" [ngClass]=\"{ 'completed' : todo.completed }\" (dblclick)=\"editTodo(todo)\">{{ todo.title }}</div>\n        <!-- <ng-template #editingTodo>\n      <input type=\"text\" class=\"todo-item-edit\" [(ngModel)]=\"todo.title\" (blur)=\"doneEdit(todo)\" (keyup.enter)=\"doneEdit(todo)\" (keyup.esc)=\"cancelEdit(todo)\"autofocus>\n    </ng-template> -->\n    </div>\n    <div class=\"remove-item\" (click)=\"deleteTodo(todo.id)\">\n        &times;\n    </div>\n</div>\n\n<div class=\"extra-container\">\n    <div><label><input type=\"checkbox\" (change)= \"checkAllTodos()\"> Check All</label></div>\n    <div>{{remaining()}} items left</div>\n</div>\n\n<div class=\"extra-container\">\n    <div>\n        <button [ngClass]=\"{'active': filter === 'all'}\" (click)=\"filter='all'\">All</button>\n        <button [ngClass]=\"{'active': filter === 'active'}\" (click)=\"filter='active'\">Active</button>\n        <button [ngClass]=\"{'active': filter === 'completed'}\" (click)=\"filter='completed'\">Completed</button>\n    </div>\n\n    <div *ngIf=\"atLeastOneCompleted()\">\n        <button (click)=\"clearCompleted()\">Clear Completed</button>\n    </div>"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _service_learning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/learning.service */ "./src/app/service/learning.service.ts");




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(service) {
        this.service = service;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.filter = "all";
        this.idForTodo = 4;
        this.todoTitle = "";
        this.todos = [];
        // this.todos = [
        //   {
        //     id: 1,
        //     title: "Finish Angular Screencast",
        //     completed: false,
        //     editing: false
        //   },
        //   {
        //     id: 2,
        //     title: "Take over world",
        //     completed: false,
        //     editing: false
        //   },
        //   {
        //     id: 3,
        //     title: "One more thing",
        //     completed: false,
        //     editing: false
        //   }
        // ];
    };
    TodoListComponent.prototype.addTodo = function () {
        if (this.todoTitle.trim().length === 0) {
            return;
        }
        this.service.addTask({
            id: this.idForTodo,
            title: this.todoTitle,
            completed: false,
            editing: false
        });
        this.todos.push({
            id: this.idForTodo,
            title: this.todoTitle,
            completed: false,
            editing: false
        });
        this.todoTitle = "";
        this.idForTodo++;
    };
    TodoListComponent.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoListComponent.prototype.remaining = function () {
        return this.todos.filter(function (todo) { return !todo.completed; }).length;
    };
    TodoListComponent.prototype.atLeastOneCompleted = function () {
        return this.todos.filter(function (todo) { return todo.completed; }).length > 0;
    };
    TodoListComponent.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    TodoListComponent.prototype.checkAllTodos = function () {
        this.todos.forEach(function (todo) { return (todo.completed = event.target.checked); });
    };
    TodoListComponent.prototype.todosFiltered = function () {
        if (this.filter == "all") {
            return this.todos;
        }
        else if (this.filter == "active") {
            return this.todos.filter(function (todo) { return !todo.completed; });
        }
        else if (this.filter == "completed") {
            return this.todos.filter(function (todo) { return todo.completed; });
        }
        return this.todos;
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "todo-list",
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(30px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(30px)' }))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/components/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_learning_service__WEBPACK_IMPORTED_MODULE_3__["LearningService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/service/learning.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/learning.service.ts ***!
  \*********************************************/
/*! exports provided: LearningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningService", function() { return LearningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LearningService = /** @class */ (function () {
    function LearningService() {
        this.todoList = [];
    }
    LearningService.prototype.getTodoTask = function () {
        return this.todoList;
    };
    LearningService.prototype.addTask = function (task) {
        this.todoList.push(task);
        console.log(this.todoList);
    };
    LearningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LearningService);
    return LearningService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/yash/Documents/projects/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map