angular.module('TIYAngularApp', [])
   .controller('SampleController', function($scope, $http) {
//        $scope.name = "James";
        $scope.todos = {};

        $scope.getTodos = function() {
                    console.log("In getTodos function in js controller!");
                    $scope.name = "testName";

                    $http.get("/todo.json")
                        .then(
                            function successCallback(response) {
                                console.log(response.data);
                                console.log("Adding data to scope");
                                $scope.todos = response.data;
                            },
                            function errorCallback(response) {
                                console.log("Unable to get data");
                            });
                };

        $scope.newToDo = {};
    });