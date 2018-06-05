// JavaScript Document
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});


app.directive('tooltipFollowCursor', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var x, y;
      element.on('mousemove', function(e) {
        x = e.pageX, y = e.pageY;
        this.children[0].style.top = (y + -60) + 'px';
        this.children[0].style.left = (x + -180) + 'px';
      });
    }
  };
})