angular.module('scotchTodo', ['ui.router', 'todoController', 'todoService'])
  .config(config);

  function config($stateProvider, $locationProvider) {
    $stateProvider
      .state('login', {
      	url: '/',
        templateUrl: '/js/views/login.html',
        controller: '',
        controllerAs: 'vm'
      })
      .state('todos', {
        url: '/tasks',
        templateUrl: '/js/views/todos.html',
        controller: 'mainController',
        controllerAs: 'vm'
      });


    $locationProvider.html5Mode(true);
  }

