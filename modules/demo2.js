var React = require('react');
var ZHCN = require('../i18n/zh-CN');
var EN = require('../i18n/en');
var moment = require('moment');
moment.locale('zh-CN');
var names = ['Alice', 'Emily', 'Kate'];

var arr = [
			<h1>first Love !</h1>,
			<h2>React is beautiful</h2>,
		];

var Demo = React.createClass({
  render: function() {
  	return <div>
  				<h1>Hello {this.props.name} {this.props.data}</h1>
	  			<div>
		        {
		          names.map(function (name) {
		            return <div>Hello, {name}!</div>
		          })
		        }
		        </div>
		        <div id='demo3'>
		        	{arr}
		        	{EN.loadingMore()}
		        	{moment(1316116057189).fromNow()}
		        </div>
  		   </div>;
  }
});

module.exports = Demo;
