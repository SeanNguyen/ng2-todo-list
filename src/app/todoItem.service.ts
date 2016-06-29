/**
 * Created by seann on 23/6/2016.
 */

import {Injectable, OnInit} from "@angular/core";
import {Todo} from "./todo.model";
import _ = require("lodash");

@Injectable()
export class TodoItemService implements OnInit {
    private todos:Array<Todo> = [];

    public ngOnInit() {}

    public getTodoItems(filters?: { state: string }) {
        var returnedTodos: Todo[] = this.todos;
        if(filters) {
            switch (filters["state"]) {
                case "active":
                    returnedTodos = _.filter(returnedTodos, { completed: false });
                    break;
                case  "completed":
                    returnedTodos = _.filter(returnedTodos, { completed: true });
                    break;
                default:
                    returnedTodos = [];
            }
        }
        return returnedTodos;
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

    public removeTodo(todo: Todo) {
        _.remove(this.todos, todo);
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