"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var RecommenderApi = require('../api/recommenderApi');
var ActionTypes = require('../constants/actionTypes');

var RecommenderActions = {
	fetchWikis: function(text) {
		Dispatcher.dispatch({
			actionType: ActionTypes.WIKI_LOADER_ON
		});
		var wikis = RecommenderApi.getWikis(text, function(res, err){
			if (err) {
				Dispatcher.dispatch({
					actionType: ActionTypes.WIKI_LOADER_OFF
				});
				//Hey dispatcher, go tell all the stores that an author was just created.
				Dispatcher.dispatch({
					actionType: ActionTypes.ERROR_FETCH_WIKIS,
					err: err
				});
				return;
			}
			if (res) {
				Dispatcher.dispatch({
					actionType: ActionTypes.WIKI_LOADER_OFF
				});

				console.log('fetchWikis action success');
				//Hey dispatcher, go tell all the stores that an author was just created.
				Dispatcher.dispatch({
					actionType: ActionTypes.FETCH_WIKIS,
					wikis: res.data
				});
			}
			return;
		});

		
	}
};

module.exports = RecommenderActions;