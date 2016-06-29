/**
 * Created by seann on 22/6/2016.
 */
import { bootstrap } from "@angular/platform-browser-dynamic"
import {TodoApp} from './app';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

bootstrap(TodoApp, [
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]).catch(err => console.error(err));