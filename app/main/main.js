'use strict';

angular.module('myApp.main', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'main/main.html',
      controller: 'MainCtrl'
    });
  }])

  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.menu = [
      {
        name: 'margarita',
        ingredients: ['basil', 'tomato', 'mozzarella'],
        price: 5.75
      },
      {
        name: 'peperoni',
        ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
        price: 7.00
      },
      {
        name: 'meat',
        ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'],
        price: 12.00
      },
      {
        name: 'marina',
        ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'],
        price: 15.75
      }
    ];
    $scope.menu.map(function (pizza, index) {
      pizza.id = index + 1;
    });
    $scope.addToCart = function (pizza) {
      console.log('Add to cart', pizza);
    };
  }]);