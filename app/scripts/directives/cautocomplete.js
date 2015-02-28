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
            templateUrl: '<div></div>',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {}
        };
    });
