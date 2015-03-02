'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cCloudWord
 * @description
 * # cCloudWord
 */
angular.module('frontendApp')
    .directive('cCloudWord', function($location, Server, Lyrics) {
        return {
            templateUrl: 'views/directives/cWordCloud.html',
            restrict: 'EACM',
            scope: {
                words: '=words',
            },
            link: function postLink(scope, element, attrs) {
                scope.bg = 'white';
                scope.$watch('words', function(oldVal, newVal) {
                    var artists = Lyrics.selectedArtists.toString();
                    if (scope.words.length) {
                        scope.bg = 'white';
                    }
                    scope.words = scope.words.map(function(curr, idx) {
                        curr.link = window.location + artists +
                            '/SongsList/' + curr.text;
                        return curr;
                    });

                });
                scope.width = 250;
                scope.color = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'];
            }
        };
    });
