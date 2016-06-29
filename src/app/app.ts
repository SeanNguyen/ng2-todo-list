/**
 * Created by seann on 26/6/2016.
 */

import {Component, OnInit} from "@angular/core";
import { TodoItemService } from "./todoItem.service";
import { Todo } from "./todo.model";
import {TodoComponent} from "./todo/component";
import _ = require("lodash");
import {ROUTER_DIRECTIVES, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'todo-app',
    providers: [TodoItemService],
    templateUrl: "app/app.html",
    directives: [TodoComponent, ROUTER_DIRECTIVES]
})
export class TodoApp implements OnInit {
    public newTodo: Todo = new Todo();
    public activatedPath = '';
    private activatedPathSub: Subscription;

    constructor(public todoService: TodoItemService, private route: ActivatedRoute) {}

    public ngOnInit() {
        this.activatedPathSub = this.route.url.subscribe(urlPathWithParams => {
            console.log(urlPathWithParams);
        });
    }

    public addTodoItem() {
        this.todoService.addTodoItem(this.newTodo);
        this.newTodo = new Todo();
    }
}