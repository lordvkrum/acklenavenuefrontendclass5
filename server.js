'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
	port: process.env.PORT || 8000
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

server.start(function() {
	console.log('info', 'Server running at ', server.info.uri);
});
