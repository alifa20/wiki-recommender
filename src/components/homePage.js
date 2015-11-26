"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var WikiStore = require('../stores/wikiStore');
var WikiList = require('./recommendation/wikiList');
var RecommenderActions = require('../actions/recommenderActions');
var toastr = require('toastr');

var Home = React.createClass({

	recommendWikis: function(event) {
		event.preventDefault();
		// debugger;
		RecommenderActions.fetchWikis(this.state.textVal);
		toastr.success('Wiki list received');
	},
	handleTextChange: function(event) {
		this.setState({textVal: event.target.value});
	},
	getInitialState: function() {
		return {
			wikis: WikiStore.getAllWikis(),
			loadIndicator: WikiStore.getLoadIndicator(),
			textVal: ''
		};
	},

	componentWillMount: function() {
		WikiStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		WikiStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		// debugger;
		this.setState({ wikis: WikiStore.getAllWikis() });
		this.setState({ loadIndicator: WikiStore.getLoadIndicator() });
	},

	loadIndicator: function() {
		if (this.state.loadIndicator) {
			return (<span>Loading...</span>);
		}
		else
		{
			return null;
		}
	},
	render: function() {
		return (
			<div className="">
				<h1>Wiki recommendation</h1>
				<div className="row">
					<div className="col-lg-12">
						<div><textArea value={this.state.textVal} onChange={this.handleTextChange} /></div>
						<div className="row">
							<div className="col-lg-12">
								<button className="btn btn-primary" onClick={this.recommendWikis}>Submit</button>
							{this.loadIndicator()}
							</div>
						</div>
					</div>
				</div>
				<hr/>
				<WikiList wikis={this.state.wikis} key="wiki-list" />
			</div>
		);
	}
});

module.exports = Home;