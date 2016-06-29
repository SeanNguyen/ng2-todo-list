/**
 * Created by seann on 29/6/2016.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {TodoList} from "./todoList/todoList.component";

export const routes: RouterConfig = [
    { path: '', component: TodoList },
    { path: ':filteredState', component: TodoList }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
