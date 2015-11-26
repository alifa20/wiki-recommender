"use strict";

var wikis = require('./recommenderData').wikis;
var axios = require('axios');
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var RecommenderApi = {
	getWikis: function(text, callback) {
		var ret;
		console.log('hi', text);
		// var config = {
		// method: 'post',
		// url: 'http://localhost:8082',
		// data: { 'title': 'NA', 'text': text}
		// };
		// axios(config)
		// .then(function (response) {
		// 	console.log(response);
		// 	callback(response);
		// })
		// .catch(function (response){
		// 	console.log(response);
		// 	callback(response);
		// }); 
		return ret;
	}
};
module.exports = RecommenderApi;