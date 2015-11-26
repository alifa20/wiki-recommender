"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
	INITIALIZE: null,
	CREATE_AUTHOR: null,
	UPDATE_AUTHOR: null,
	DELETE_AUTHOR: null,
	FETCH_WIKIS: null,
	ERROR_FETCH_WIKIS: null,
	WIKI_LOADER_ON: null,
	WIKI_LOADER_OFF: null
});