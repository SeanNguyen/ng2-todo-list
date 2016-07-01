/**
 * Created by seann on 22/6/2016.
 */
import { bootstrap } from "@angular/platform-browser-dynamic"
import {TodoApp} from './app';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

var todoApp = bootstrap(TodoApp, [
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LocalStorageService
]).catch(err => console.error(err));

LocalStorageSubscriber(todoApp);