angular.module('components', [])
    .directive("searchResult", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: '../directives/searchresult.html',
            replace: true,
            scope: {
                // @ : text 
                personName: "@",
                personAddress: "@"
            }
        };
    })
    
    .directive("searchResultObject", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: '../directives/searchresultObject.html',
            replace: true,
            //isolating scopes
            scope: {
                // = : object 
                personObject: "="
            }
        };
    })

    .directive("searchResultFunction", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: '../directives/searchresultFunction.html',
            replace: true,
            //isolating scopes
            scope: {
                // = : object 
                personObject: "=",
                // & : function
                formattedAddressFunction: "&"
            },
            transclude: true,
            link: function (scope, elements, attrs) {

                console.log('Linking...');
                console.log(scope);

                if (scope.personObject.name == 'John Doe') {
                    elements.removeAttr('class');
                }

                console.log(elements);
            }
//            compile: function (elem, attrs) {
//            
//                //console.log('Compiling...');
//                //console.log(elem);
//                
//                return {
//                    
//                    post: function (scope, elements, attrs) {
//                    
//                        console.log('Post linking...');
//                        console.log(scope);
//                        
//                        if (scope.personObject.name == 'John Doe') {
//                            elements.removeAttr('class');
//                        }
//                        
//                        console.log(elements);
//                    }
//                };
//            }
        };
    });