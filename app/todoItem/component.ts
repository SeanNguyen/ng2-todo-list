/**
 * Created by seann on 23/6/2016.
 */

import {Component} from "@angular/core";
import { TodoItemService } from "./service";

@Component({
    selector: 'todo-item',
    providers: [TodoItemService],
    templateUrl:"app/todoItem/template.html",
    styleUrls: ["app/todoItem/style.css"]
})
export class TodoItem {
    public componentName: string = "TODO ITEM";
    public todoItems: Array<any>;

    constructor(private todoItemService: TodoItemService) {
        this.todoItems = todoItemService.getTodoItems();
    }
}