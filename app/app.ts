/**
 * Created by seann on 26/6/2016.
 */

import { Component, OnInit } from "@angular/core"
import { TodoItemService } from "./services/todoItemService"

@Component({
    selector: 'todo-app',
    providers: [TodoItemService],
    templateUrl: "app/app.html"
})
export class TodoApp implements OnInit {
    private todoItemService: TodoItemService;

    public newTodoItem: string;

    public todoItems: Array<string> = [];
    constructor(todoItemService: TodoItemService) {
        this.todoItemService = todoItemService;
    }

    ngOnInit() {
    }

    public addTodoItem(newTodoItem: string) {
        this.todoItems.push(newTodoItem);
    }
}