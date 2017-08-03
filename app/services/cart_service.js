var CartService = angular.module('CartService', [])
  .service('Cart', function () {
    var cart = [
      {
        name: 'test1',
        price: 1
      },
      {
        name: 'test2',
        price: 2
      }
    ];
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
  });