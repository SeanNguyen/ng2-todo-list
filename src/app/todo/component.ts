/**
 * Created by tronguyen on 28/6/16.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import construct = Reflect.construct;
import {Todo} from "../todo.model";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'todo',
    templateUrl: "app/todo/template.html"
})
export class TodoComponent {
    @Input() todo: Todo;
    @Output() onDestroy: EventEmitter<any> = new EventEmitter();

    public editing: boolean = false;
    public editedTitle: string = "";

    public startEditing(todoTextbox) {
        if(this.editing)
            return;

        this.editing = true;
        this.editedTitle = this.todo.title;
        Observable.timer(0).subscribe(t=> {
            todoTextbox.focus();
        });
    }

    public cancelEditing() {
        if(!this.editing)
            return;

        this.editing = false;
        this.editedTitle = '';
    }

    public finishEditing() {
        if(!this.editing || !this.editedTitle)
            return;

        this.editing = false;
        this.todo.title = this.editedTitle.trim();
    }

    public destroy() {
        this.onDestroy.emit(null);
    }
}
