var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); 提取公共部分代码

module.exports = {
	entry : {
		entry1:'./main.js'
	},//{entry1:'',entry2:''}

	output: {
		path : __dirname,
		filename: 'bundle.js'
	},

	//定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
	module:{
		loaders:[
			{test: /\.js$/,loader: 'babel-loader',
			exclude: /node_modules/,
        	query: {
          		presets: ['es2015', 'react']
        	}}, //凡是 .js 结尾的文件都是用 babel-loader 做处理
			{ test: /\.css$/, loaders: ['style-loader','css-loader'] },
			{ test: /\.less$/, loader: 'less'},
			{ test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' }
		]
	},

	resolve:{
		exceptions:['','.js','.jsx','.css','.less']
	}

	//这里定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取出公用的部分，生成common.js
	//,plugins: [commonsPlugin]
}