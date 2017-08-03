var MenuService = angular.module('MenuService', [])
  .service('Menu', function () {
    this.get = function () {
      return [
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
    };
  });