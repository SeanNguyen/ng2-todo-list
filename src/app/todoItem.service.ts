/**
 * Created by seann on 23/6/2016.
 */

import {Injectable} from "@angular/core";
import {Todo} from "./todo.model";

@Injectable()
export class TodoItemService {
    private todos:Array<Todo>;

    constructor() {
        this.todos = [];
    }

    public getTodoItems() {
        return this.todos;
    }
}