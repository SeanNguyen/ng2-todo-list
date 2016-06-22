/**
 * Created by seann on 22/6/2016.
 */

import {Component} from "@angular/core"
import {bootstrap} from "@angular/platform-browser-dynamic"

@Component({
    selector: 'todo-app',
    template:   '<h1 class="main-text">Hello from the {{ componentName }}.</h1>'
})
class TodoApp {
    public componentName = "Todo App"
}

bootstrap(TodoApp);