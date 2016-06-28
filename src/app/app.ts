/**
 * Created by seann on 26/6/2016.
 */

import { Component, OnInit } from "@angular/core";
import { TodoItemService } from "./todoItem.service";
import { Todo } from "./todo.model";
import {TodoComponent} from "./todo/component";

@Component({
    selector: 'todo-app',
    providers: [TodoItemService],
    templateUrl: "app/app.html",
    directives: [TodoComponent]
})
export class TodoApp {
    public newTodo: Todo = new Todo();
    public todos: Todo[] = [];

    constructor(private todoItemService: TodoItemService) {}

    public addTodoItem() {
        if(!this.newTodo.title) {
            return;
        }
        this.newTodo.title = this.newTodo.title.trim();
        this.todos.push(this.newTodo);
        this.newTodo = new Todo();
    }

    public isAllTodoCompleted() {
        for(var todo of this.todos) {
            if(!todo.completed) {
                return false;
            }
        }
        return true;
    }

    public toggleAllTodoStates() {
        var toggledState: boolean = !this.isAllTodoCompleted();
        this.todos.forEach((todo)=> {
            todo.completed = toggledState;
        });
    }

    public countCompletedTodo() {
        var counter: number = 0;
        this.todos.forEach((todo) => {
            if(todo.completed)
                counter++;
        })
        return counter;
    }

    public countUncompletedTodo() {
        return this.todos.length - this.countCompletedTodo();
    }
}