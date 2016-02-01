// ES6
//import MyModule from './modules/hello';

//commonJs
var react = require('react');
var ReactDOM = require('react-dom');
import Hello from './modules/hello';
//var Hello = require('./modules/hello');
var Demo = require('./modules/demo2');
var Demo_A = require('./modules/demo3');
var appCss = require('./modules/Appcss/pro.css');
import Demo_B from './modules/demo4';

 ReactDOM.render(
 	<div>
    	<Hello />
    	<div id='demo2'>
    		<Demo name='zhuel' data='xxxx'/>
    	</div>
    	<div id='demo4'>
    		<Demo_A>
    			<span> AAAAAAA </span>
          		<span> BBBBBBB </span>
    		</Demo_A>
            <Demo_B title='name'/>
    	</div>
    </div>,
    document.getElementById('xxx')
  );