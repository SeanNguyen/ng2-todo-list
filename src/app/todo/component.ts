/**
 * Created by tronguyen on 28/6/16.
 */

import {Component, Input} from "@angular/core";
import construct = Reflect.construct;
import {Todo} from "../todo.model";

@Component({
    selector: 'sean-todo',
    templateUrl: "app/todo/template.html"
})
export class TodoComponent {
    @Input() todo: Todo;

    public editing: boolean = false;

    public startEditingState() {
        this.editing = true;
    }

    public stopEditingState() {
        this.editing = false;
    }
}
