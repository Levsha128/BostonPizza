'use strict';

angular.module('myApp.history', ['ngRoute', 'OrderService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/history', {
      templateUrl: 'history/history.html',
      controller: 'HistoryCtrl'
    });
  }])

  .controller('HistoryCtrl', ['$scope', 'Order', function ($scope, Order) {
    $scope.getOrders = function () {
      return Order.get()
        .map(function (order) {
          order.title = order.pizzas.join(', ');
          return order;
        });
    };
  }]);