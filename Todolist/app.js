var app = angular.module('ToDoApp', []);

app.controller('ToDoController', function ($scope) {
    $scope.tasks = [];

    $scope.priorities = ['Low', 'Medium', 'High']; // Add task priorities

    $scope.addTask = function () {
        if ($scope.newTask) {
            $scope.tasks.push({ text: $scope.newTask, completed: false, priority: 'Medium' });
            $scope.newTask = '';
        }
    };

    $scope.removeTask = function (index) {
        $scope.tasks.splice(index, 1);
    };

    $scope.editTask = function (index) {
        const newText = prompt('Edit task:', $scope.tasks[index].text);
        if (newText !== null && newText !== '') {
            $scope.tasks[index].text = newText;
        }
    };
});
