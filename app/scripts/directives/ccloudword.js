'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cCloudWord
 * @description
 * # cCloudWord
 */
angular.module('frontendApp')
    .directive('cCloudWord', function($location, Server) {
        return {
            templateUrl: 'views/directives/cWordCloud.html',
            restrict: 'EACM',
            scope: {
                words: '=words',
            },
            link: function postLink(scope, element, attrs) {
                // TODO: Make colors work.
                scope.$watch('words', function(oldVal, newVal) {
                    scope.words = scope.words.map(function(curr, idx) {
                        curr.link = window.location +
                            '/SongsList/' + curr.text;
                        return curr;
                    });

                });
                scope.width = 750;
                scope.colors = ['#ffffff', '#000000', '#223344', '#00ff00', ];
            }
        };
    });
