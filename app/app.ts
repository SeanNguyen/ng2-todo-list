/**
 * Created by seann on 26/6/2016.
 */

import { Component, OnInit } from "@angular/core";
import { TodoItemService } from "./todoItem.service";
import { Todo } from "./todo.model";

@Component({
    selector: 'todo-app',
    providers: [TodoItemService],
    templateUrl: "app/app.html"
})
export class TodoApp {
    public newTodo: Todo = new Todo();
    public todos: Todo[] = [];

    constructor(private todoItemService: TodoItemService) {}

    public addTodoItem() {
        this.todos.push(this.newTodo);
        this.newTodo = new Todo();
    }
}