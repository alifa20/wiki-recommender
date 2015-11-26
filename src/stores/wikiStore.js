"use strict";


var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _wikis = [];
var loadIndicator;
var WikiStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllWikis: function() {
		return _wikis;
	},

	getLoadIndicator: function() {
		return loadIndicator;
	}

});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.FETCH_WIKIS:
			_wikis = action.wikis;
			WikiStore.emitChange();
			break;
		case ActionTypes.WIKI_LOADER_ON:
			loadIndicator = true;
			WikiStore.emitChange();
			break;
		case ActionTypes.WIKI_LOADER_OFF:
			loadIndicator = false;
			WikiStore.emitChange();			
			break;
		default:
			// no op
	}
});

module.exports = WikiStore;