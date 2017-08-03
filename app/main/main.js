'use strict';

angular.module('myApp.main', ['ngRoute', 'MenuService', 'CartService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'main/main.html',
      controller: 'MainCtrl'
    });
  }])

  .controller('MainCtrl', ['$scope', 'Menu', 'Cart', function ($scope, Menu, Cart) {
    $scope.menu = Menu.get();
    $scope.sorting = 'none';
    $scope.query = '';
    var SORTS = ['none', 'asc', 'desc']; //todo make constant
    var SORT_ICONS = {
      'none':'fa-sort',
      'asc':'fa-sort-asc',
      'desc':'fa-sort-desc'
    };
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
    var filter = function (menu, query) {
      if (!query.length) { //empty query optimization
        return menu;
      }
      var compiledRegEx = new RegExp('.*' + query + '.*');
      return menu.filter(function (pizza) {
        return pizza.name.match(compiledRegEx);
      });
    };
    $scope.getMenu = function () {
      return sort(filter($scope.menu, $scope.query), $scope.sorting);
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
      Cart.add(pizza.name, pizza.price);
    };
    $scope.getSortIcon = function () {
      return SORT_ICONS[$scope.sorting];
    }
  }]);