"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./src/routes');
var InitializeActions = require('./src/actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});