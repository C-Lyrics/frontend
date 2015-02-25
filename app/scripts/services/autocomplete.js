'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Autocomplete
 * @description
 * # Autocomplete
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Autocomplete', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
