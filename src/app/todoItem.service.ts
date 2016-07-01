/**
 * Created by seann on 23/6/2016.
 */

import {Injectable} from "@angular/core";
import {Todo} from "./todo.model";
import _ = require("lodash");
import {LocalStorage} from "angular2-localstorage/WebStorage";

@Injectable()
export class TodoItemService {
    @LocalStorage("@angular-todos") private todos: Todo[] = [];

    public getTodoItems() {
        return this.todos;
    }

    public getTodoItemsSize() {
        return this.todos ? this.todos.length : 0;
    }

    public addTodoItem(newTodo: Todo) {
        if(!newTodo.title) {
            return;
        }
        newTodo.title = newTodo.title.trim();
        this.todos.push(newTodo);
    }

    public removeTodo(removedTodo: Todo) {
        if(!removedTodo)
            return;
        _.remove(this.todos, (todo) => {
            return todo === removedTodo;
        });
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
        });
        return counter;
    }

    public countUncompletedTodo() {
        return this.todos.length - this.countCompletedTodo();
    }

    public clearCompletedTodo() {
        _.pullAllBy(this.todos, [{ completed: true }], 'completed');
    }
}