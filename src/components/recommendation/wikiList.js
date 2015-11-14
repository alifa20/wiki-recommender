"use strict";

var React = require('react');
// var WikiItem = require('./wikiList');

var WikiList = React.createClass({
	propTypes: {
		wikis: React.PropTypes.array.isRequired
	},



	render: function() {
		var createWikiCell = function(wiki){
			return (
				<div key={wiki.id} className="col-lg-3">
					<a href={wiki.uri}>{wiki.name}</a>
					<div>{wiki.text}</div>
				</div>
				);
		};
		return (
			<div className="rom">{this.props.wikis.map(createWikiCell, this)}</div>
		);
	}

});
module.exports = WikiList;