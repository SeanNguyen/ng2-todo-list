/**
 * Created by seann on 23/6/2016.
 */

import { Injectable } from "@angular/core";

@Injectable()
export class TodoItemService {
    private todoItems:Array<string>;

    constructor() {
        this.todoItems = [];
    }

    public getTodoItems() {
        return this.todoItems;
    }
}