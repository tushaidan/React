var React = require('react');

var Demo3 = React.createClass({
	render:function(){
		return (
			<ol>
			{
				React.Children.map(this.props.children,function (child){
					return <li>{child}</li>;
				})
			}
			</ol>
		);
	}
});

module.exports = Demo3;