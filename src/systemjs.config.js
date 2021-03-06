/**
* Created by seann on 23/6/2016.
*/

System.config({
    map: {
        '@angular': 'vendors/@angular',
        'rxjs': 'vendors/rxjs',
        'lodash': 'vendors/lodash',
        'angular2-localstorage': 'vendors/angular2-localstorage'
    },
    packages: {
        // Angular specific barrels.
        '@angular/core': { main: 'index' },
        '@angular/common': { main: 'index' },
        '@angular/compiler': { main: 'index' },
        '@angular/http': { main: 'index' },
        '@angular/router': { main: 'index' },
        '@angular/platform-browser': { main: 'index' },
        '@angular/platform-browser-dynamic': { main: 'index' },

        // Thirdparty barrels.
        'rxjs': { main: 'index' },
        'lodash': { main: 'index' },
        "angular2-localstorage": {},

        // App specific barrels.
        'app': { main: 'index' }
    }
});