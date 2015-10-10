angular.module('routes', ['ngRoute'])

    .constant('CONFIG', {
        'APP_NAME' : 'My Awesome App',
        'APP_VERSION' : '0.0.1',
        'BASE_URL' : ''
    })

    .factory('GeneralService', function () {
        return {
            app : 'anonymous'
        };
    })

    .config(function ($routeProvider) {

        $routeProvider
        
            .when('/', {
                templateUrl: '../pages/main.html',
                controller: 'mainController'
            })
        
            .when('/second', {
                templateUrl: '../pages/second.html',
                controller: 'secondController'
            })
    
            .when('/third', {
                templateUrl: '../pages/third.html',
                controller: 'thirdController'
            });
    });