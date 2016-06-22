/**
 * Created by seann on 22/6/2016.
 */

import { Component } from "@angular/core"
import { bootstrap } from "@angular/platform-browser-dynamic"
import { TodoItem } from "./todoItem/component"

@Component({
    selector: 'todo-app',
    directives: [TodoItem],
    template:   `
                <div>
                    <h1 class="main-text">Hello from the {{ componentName }}.</h1>
                    <todo-item></todo-item>
                </div>
                `
})
class TodoApp {
    public componentName = "Todo App"
}

bootstrap(TodoApp);