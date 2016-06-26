/**
* Created by seann on 23/6/2016.
*/

System.config({
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
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

        // App specific barrels.
        'app': { main: 'index' }
    }
});