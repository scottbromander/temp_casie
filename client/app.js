var myApp = angular.module('myApp', []);

myApp.controller('WelcomeController', ['$scope', '$http', function($scope, $http){
    $scope.heading = 'Message: ';
    $scope.movies = [];

    $scope.updateMessage = function(){
        $scope.message = "Hello " + $scope.name + "!";
    };

    $scope.grabinfo = function(){
        return $http.get('/info').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to get from API');
            }

            $scope.movies = response.data.movies;

            $scope.movies.forEach(function(movie){
                if(movie["review"] == "na"){
                    console.log("false!");
                    movie["showreview"] = false;
                } else {
                    console.log("true!");
                    movie["showreview"] = true;
                }
            });

            console.log($scope.movies);
            return response.data;
        })
    }
}]);

