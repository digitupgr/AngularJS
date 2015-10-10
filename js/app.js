'use strict';


//Parse.initialize("232ArN0DP9XuNRssZUWWT7gbzeDAuyfXcVigBpU6", "frgUWhqdHq70VIJtP2XeKH9baF7YGxEXTsIJkyjJ");
//    
//var TestObject = Parse.Object.extend("TestObject");
//var testObject = new TestObject();
//  testObject.save({foo: "bar"}, {
//  success: function(object) {
//    $(".success").show();
//  },
//  error: function(model, error) {
//    $(".error").show();
//  }
//});


var myApp = angular.module('myApp', ['components', 'routes']);

myApp.controller('mainController', ['$scope', 'CONFIG', function ($scope, CONFIG) {

    $scope.name = 'Main';
    
    $scope.message = 'Hello Nick!';
    
    $scope.alertClick = function () {
        alert('clicked');
    };

    $scope.person = {
        name: 'John Doe',
        address: '447 Vouliagmenis Ave, 15573, Athens'
    };
    
    $scope.config = CONFIG;
    
}]);

myApp.controller('secondController', ['$scope', '$http', 'GeneralService', function ($scope, $http, GeneralService) {

    $scope.name = GeneralService.app;
    
    $scope.person = {
        name: 'John Doe',
        address: '447 Vouliagmenis Ave',
        zip: '15573',
        city: 'Athens'
    };
    
    $scope.sort = 1;
    
    $scope.formattedAddress = function (person, sort) {
        
        if (sort === 1) {
            return person.address + ', ' +  person.zip + ', ' + person.city;
        }
        
        if (sort === 2) {
            return person.address;
        }
        
    };
    
//    $http.get('/api')
//        .success(function(result){
//            $scope.rules = result;
//        })

}]);


myApp.controller('thirdController', ['$scope', function ($scope) {
    
    $scope.people = [
        {
            name: 'John Doe',
            address: '10 Vouliagmenis Ave',
            zip: '15073',
            city: 'Kalithea'
        },
        {
            name: 'Nick Mafredas',
            address: '447 Vouliagmenis Ave',
            zip: '15573',
            city: 'Athens'
        }
    ];
    
    
    $scope.formattedAddress = function (person, sort) {
        
        if (sort === 1) {
            return person.address + ', ' +  person.zip + ', ' + person.city;
        }
        
        if (sort === 2) {
            return person.address;
        }
        
    };
    
//    $http.get('/api')
//        .success(function(result){
//            $scope.rules = result;
//        })

}]);