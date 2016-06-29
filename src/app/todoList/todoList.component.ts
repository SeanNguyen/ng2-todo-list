/**
 * Created by tronguyen on 29/6/16.
 */

import {Component} from "@angular/core";
import {TodoComponent} from "../todo/component";
import {Todo} from "../todo.model";

@Component({
    selector: "todo-list",
    directives: [TodoComponent]
})
export class TodoList {
    public todos: Todo[] = [];
}