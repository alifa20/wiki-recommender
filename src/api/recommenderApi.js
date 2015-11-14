"use strict";

var wikis = require('./recommenderData').wikis;
var _ = require('lodash');


var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var RecommenderApi = {
	getWikis: function(text) {
		return _clone(wikis); 
	}
};
module.exports = RecommenderApi;