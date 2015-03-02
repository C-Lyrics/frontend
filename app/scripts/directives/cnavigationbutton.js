'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cNavigationButton
 * @description
 * # cNavigationButton
 */
angular.module('frontendApp')
    .directive('cNavigationButton', function() {
        return {
            templateUrl: 'views/directives/buttonView.html',
            restrict: 'EACM',
            replace: true,
            scope: {
                link: '=link',
                text: '=text',
            },
            link: function postLink(scope, element, attrs) {
                scope.callback = false;
            }
        };
    });
