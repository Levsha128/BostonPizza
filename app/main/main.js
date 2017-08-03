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
        name: 'peperoni',
        ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
        price: 7.00
      },
      {
        name: 'margarita',
        ingredients: ['basil', 'tomato', 'mozzarella'],
        price: 5.75
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
    $scope.sorting = 'none';
    var SORTS = ['none', 'asc', 'desc']; //todo make constant
    var sort = function (menu, sorting) { //pure sort function
      var clonedMenu = menu.slice(0); // clone menu for immutability
      switch (sorting) {
        case 'asc':
          return clonedMenu.sort(function (a, b) {
            return a.price > b.price;
          });
        case 'desc':
          return clonedMenu.sort(function (a, b) {
            return a.price < b.price;
          });
        case 'none':
          return clonedMenu;
        default:
          return clonedMenu;
      }
    };
    $scope.getMenu = function () {
      return sort($scope.menu, $scope.sorting);
    };
    $scope.changeSort = function () {
      var sortIndex = SORTS.indexOf($scope.sorting);
      $scope.sorting = SORTS[(sortIndex + 1) % SORTS.length];
    };
    $scope.menu.map(function (pizza, index) {
      pizza.id = index + 1;
    });
    $scope.addToCart = function (pizza) {
      console.log('Add to cart', pizza);
    };
  }]);