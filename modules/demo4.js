import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired
	},

	componentDidMount:function(){
		this.setState({title:'xzczxczxc'});
	},

	getInitialState:function(){
		return {title:'xx',xxx:'没变',left:'left'}
	},

	getDefaultProps:function(){
		return {title:'zhuel @ someone'}
	},

	handleClick: function(event) {
	   this.setState({title: "alert"});
	},

	render:function(){
		return <div>
		          <h2>{this.props.title},{this.state.xxx}</h2>
		          <h1>{this.state.title}</h1>
		          <input style={{float:this.state.left,position:'absolute'}} type="button" value='click' onClick={this.handleClick} />
		        </div>
	}
});