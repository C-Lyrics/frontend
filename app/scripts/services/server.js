'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Server
 * @description
 * # Server
 * Service in the frontendApp.
 */
angular.module('frontendApp')
    .service('Server', function() {
        this.URL = 'http://localhost:9000/#!/';
        // this.server = 'http://localhost:9000/';
        this.SERVER = 'http://localhost/backend/backend/index.php/';

        this.errorHandler = function(response) {
            var data = response.data,
                status = response.status;
            if (data['error'] == "100")
                alert(status);
            else if (data['error'] == "101")
                alert(status);
            else if (data['error'] == '1')
                alert(status);
            else if (data['error'] == '2')
                alert(status);
            else if (data['error'] == '3')
                alert(status);
            else if (data['error'] == '4')
                alert(status);
            else if (data['error'] == '200')
                alert(status);
            else {
                alert('Error: ' + ' (' + status + ')');
            }

            $log.log(status);
            $log.log(response);
        };
    });
