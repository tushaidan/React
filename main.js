// ES6
//import MyModule from './modules/hello';

//commonJs
var react = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./modules/hello');
var Demo = require('./modules/demo2');
var Demo_A = require('./modules/demo3');
var appCss = require('./modules/Appcss/pro.css');

 ReactDOM.render(
 	<div>
    	<Hello />
    	<div id='demo2'>
    		<Demo name='zhuel' data='xxxx'/>
    	</div>
    	<div id='demo4'>
    		<Demo_A>
    			<span> A </span>
          		<span> B </span>
    		</Demo_A>
    	</div>
    </div>,
    document.getElementById('xxx')
  );