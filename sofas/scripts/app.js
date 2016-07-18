var dfsPrototype = angular.module('dfs-app', ['iso.directives']);

dfsPrototype.controller("DfsController", function($scope) {
  $scope.setFilter = function() {
    var el1 = $scope.$emit('iso-option', { options });
    var el = angular.element("#colorFilter");
    $scope = el.scope();
    $injector = el.injector();
    $injector.invoke(function($compile) {
      $compile(el)($scope)
    })

    let filter1 = $('.active', $('#colorFilter'));
    let filter1class = filter1.attr('ok-sel').replace('.', '');
    let filter2 = $('.active', $('#sizeFilter'));
    let filter2class = filter2.attr('ok-sel').replace('.', '');

    $scope.class = filter1class + '.' + filter2class
    $scope.firstClass = filter1class;
    $scope.secondClass = filter2class;
    console.log('in here');
  }
});

dfsPrototype.directive('appendClass', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        let filter = $('.active', element);
        if (element.attr("class") == "glyphicon glyphicon-pencil") {
          element.removeClass("glyphicon glyphicon-pencil");
          element.addClass(attrs.toggleClass);
        } else {
          element.removeClass("glyphicon glyphicon-ok");
          element.addClass("glyphicon glyphicon-pencil");
        }
      });
    }
  };
});
