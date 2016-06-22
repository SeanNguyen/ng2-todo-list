/**
 * Created by seann on 22/6/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var component_1 = require("./todoItem/component");
var TodoApp = (function () {
    function TodoApp() {
        this.componentName = "Todo App";
    }
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            directives: [component_1.TodoItem],
            template: "\n                <div>\n                    <h1 class=\"main-text\">Hello from the {{ componentName }}.</h1>\n                    <todo-item></todo-item>\n                </div>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
}());
platform_browser_dynamic_1.bootstrap(TodoApp);
//# sourceMappingURL=app.js.map