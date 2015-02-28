'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cAutocomplete
 * @description
 * # cAutocomplete
 */
angular.module('frontendApp')
    .directive('cAutocomplete', function() {
        return {
            templateUrl: 'views/directives/cAutocomplete.html',
            restrict: 'EACM',
            scope: {
                callback: '=callback',
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });
