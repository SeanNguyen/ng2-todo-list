/**
 * Created by seann on 26/6/2016.
 */

import { Component } from "@angular/core"
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
export class TodoApp {
    public componentName = "Todo App"
}