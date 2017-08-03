angular.module('myApp.link', []). //thanks to https://stackoverflow.com/a/12631074
directive('activeLink', ['$location', function (location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, controller) {
      var clazz = attrs.activeLink;
      var path = attrs.href;
      path = path.substring(2); //hack because path does not return including hashbang
      scope.location = location;
      scope.$watch('location.path()', function (newPath) {
        if (path === newPath) {
          element.parent().addClass(clazz);
        } else {
          element.parent().removeClass(clazz);
        }
      });
    }
  };
}]);