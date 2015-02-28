'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cCloudWord
 * @description
 * # cCloudWord
 */
angular.module('frontendApp')
    .directive('cCloudWord', function() {
        return {
            template: '<jqcloud words="words" autoResize="true" width="500" height="500" colors="{{colors}}" steps="7"></jqcloud>',
            restrict: 'EACM',
            scope: {
                words: '=words',
            },
            link: function postLink(scope, element, attrs) {
                scope.words = scope.words.map(function(curr, idx) {
                    curr.link = '';
                    return curr;
                });
                scope.colors = ['#ffffff', '#000000', '#223344', '#00ff00', ];
            }
        };
    });
