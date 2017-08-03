'use strict';

angular.module('myApp.cart', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cart', {
      templateUrl: 'cart/cart.html',
      controller: 'CartCtrl'
    });
  }])

  .controller('CartCtrl', ['$scope', function ($scope) {
    $scope.order = [
      {
        name: 'test1',
        price: 1
      },
      {
        name: 'test2',
        price: 2
      }
    ];
    $scope.getTotalPrice = function () {
      return $scope.order.reduce(function (total, pizza) {
        return total + pizza.price;
      }, 0);
    };
    $scope.hasItems = function () {
      return $scope.order.length > 0;
    };
    $scope.remove = function (index) {
      $scope.order.splice(index, 1);
    };
    $scope.buy = function () {
    };
  }]);