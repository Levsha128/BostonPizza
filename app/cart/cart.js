'use strict';

angular.module('myApp.cart', ['ngRoute', 'CartService', 'OrderService', 'toastr'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cart', {
      templateUrl: 'cart/cart.html',
      controller: 'CartCtrl'
    });
  }])

  .controller('CartCtrl', ['$scope', 'Cart', 'Order', 'toastr', function ($scope, Cart, Order, toastr) {
    $scope.cart = Cart.get();
    $scope.getTotalPrice = function () {
      return $scope.cart.reduce(function (total, pizza) {
        return total + pizza.price;
      }, 0);
    };
    $scope.hasItems = function () {
      return $scope.cart.length > 0;
    };
    $scope.remove = function (index) {
      Cart.remove(index);
    };
    $scope.buy = function () {
      Order.add(
        $scope.cart.map(function(pizza){return pizza.name}),
        $scope.getTotalPrice()
      );
      Cart.reset();
      toastr.success('Items purchased successfully');
    };
  }]);