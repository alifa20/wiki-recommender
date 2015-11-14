"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var RecommenderApi = require('../api/recommenderApi');
var ActionTypes = require('../constants/actionTypes');

var RecommenderActions = {
	fetchWikis: function(text) {
		var wikis = RecommenderApi.getWikis(text);

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.FETCH_WIKIS,
			wikis: wikis
		});
	}
};

module.exports = RecommenderActions;