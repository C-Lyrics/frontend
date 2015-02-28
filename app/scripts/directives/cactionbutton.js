'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cActionButton
 * @description
 * # cActionButton
 */
angular.module('frontendApp')
    .directive('cActionButton', function() {
        return {
            templateUrl: 'views/directives/buttonView.html',
            restrict: 'EACM',
            replace: true,
            scope: {
                text: '=text',
                callback: '=callback',
            },
            link: function postLink(scope, element, attrs) {}
        };
    });
