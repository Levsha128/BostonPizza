var OrderService = angular.module('OrderService', [])
  .service('Order', function () {
    var orders = [];
    this.get = function () {
      return orders;
    };
    this.add = function (pizzas, totalPrice) {
      orders.push({
        pizzas: pizzas,
        totalPrice: totalPrice,
        time: new Date()
      });
    };
  });