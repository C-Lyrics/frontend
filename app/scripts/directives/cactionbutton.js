'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cActionButton
 * @description
 * # cActionButton
 */
angular.module('frontendApp')
  .directive('cActionButton', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the cActionButton directive');
      }
    };
  });
