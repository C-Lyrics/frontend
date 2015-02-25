'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cNavigationButton
 * @description
 * # cNavigationButton
 */
angular.module('frontendApp')
  .directive('cNavigationButton', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the cNavigationButton directive');
      }
    };
  });
