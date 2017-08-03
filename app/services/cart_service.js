var CartService = angular.module('CartService', [])
  .service('Cart', function () {
    var cart = [];
    this.get = function () {
      return cart;
    };
    this.remove = function (index) {
      cart.splice(index, 1);
    };
    this.add = function (name, price) {
      cart.push({
        name: name,
        price: price
      })
    };
    this.reset = function () {
      cart.length = 0;
    };
  });