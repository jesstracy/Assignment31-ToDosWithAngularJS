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

        $scope.addTodos = function() {
            console.log("In addTodos function in js controller!");
            console.log("About to add the following todo " + JSON.stringify($scope.newToDo));
//            $scope.name = "testName";

            $http.post("/addToDo.json", $scope.newToDo)
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
        $scope.currentUser = {};
    });