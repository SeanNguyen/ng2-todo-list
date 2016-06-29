/**
 * Created by tronguyen on 29/6/16.
 */

import {Component, OnInit} from "@angular/core";
import {TodoComponent} from "../todo/component";
import {Todo} from "../todo.model";
import {ActivatedRoute} from "@angular/router";
import {TodoItemService} from "../todoItem.service";

@Component({
    selector: "todo-list",
    directives: [TodoComponent],
    template: `
        <ul class="todo-list">
            <todo *ngFor="let todo of todos" [todo]="todo" (onDestroy)="todoService.removeTodo(todo)"></todo>
        </ul>`
})
export class TodoList implements OnInit {
    public todos: Todo[] = [];

    private routeParamsSub: any;

    constructor(private route: ActivatedRoute, private todoService: TodoItemService) {}

    public ngOnInit() {
        this.routeParamsSub = this.route.params.subscribe(params => {
            var filters = { state: params["filteredState"] };
            this.todos = this.todoService.getTodoItems(filters);
        });
        this.todos = this.todoService.getTodoItems();
    }
}