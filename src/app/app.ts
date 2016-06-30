/**
 * Created by seann on 26/6/2016.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import { TodoItemService } from "./todoItem.service";
import { Todo } from "./todo.model";
import {TodoComponent} from "./todo/component";
import _ = require("lodash");
import {ROUTER_DIRECTIVES, ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'todo-app',
    providers: [TodoItemService],
    templateUrl: "app/app.html",
    directives: [TodoComponent, ROUTER_DIRECTIVES]
})
export class TodoApp implements OnInit, OnDestroy {
    public newTodo: Todo = new Todo();
    public activatedPath = '';
    private subscriptions: Subscription[] = [];

    constructor(public todoService: TodoItemService, private route: ActivatedRoute, private router: Router) {}

    public ngOnInit() {
        this.subscriptions.push(this.router.events.subscribe(event => {
            if(event instanceof NavigationEnd){
                this.activatedPath = event.url;
            }
        }));
    }

    public ngOnDestroy() {
        _.each(this.subscriptions, (subscription: Subscription) => {
            subscription.unsubscribe();
        })
    }

    public addTodoItem() {
        this.todoService.addTodoItem(this.newTodo);
        this.newTodo = new Todo();
    }
}