/**
 * Created by tronguyen on 29/6/16.
 */

import {Component, OnInit} from "@angular/core";
import {TodoComponent} from "../todo/component";
import {Todo} from "../todo.model";
import {ActivatedRoute} from "@angular/router";
import {TodoItemService} from "../todoItem.service";

enum FilteredState {
    ALL,
    ACTIVE,
    COMPLETED
}

@Component({
    selector: "todo-list",
    directives: [TodoComponent],
    template: `
        <ul class="todo-list">
            <todo *ngFor="let todo of todos" [todo]="todo" 
                    (onDestroy)="todoService.removeTodo(todo)" 
                    [hidden]="!isTodoItemVisible(todo.completed)">        
            </todo>
        </ul>`
})
export class TodoList implements OnInit {
    public todos: Todo[] = [];
    public filteredState: FilteredState = FilteredState.ALL;

    private routeParamsSub: any;

    constructor(private route: ActivatedRoute, private todoService: TodoItemService) {}

    public ngOnInit() {
        this.todos = this.todoService.getTodoItems();
        this.routeParamsSub = this.route.params.subscribe(params => {
            if(params["filteredState"] === "active") {
                this.filteredState = FilteredState.ACTIVE;
            } else if(params["filteredState"] === "completed") {
                this.filteredState = FilteredState.COMPLETED;
            } else {
                this.filteredState = FilteredState.ALL;
            }
        });
    }

    public isTodoItemVisible(isCompleted: boolean) {
        if(this.filteredState === FilteredState.ACTIVE && !isCompleted)
            return true;
        if(this.filteredState === FilteredState.COMPLETED && isCompleted)
            return true;
        return this.filteredState === FilteredState.ALL;
    }
}