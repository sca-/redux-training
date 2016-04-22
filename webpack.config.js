module.exports = {
	entry: './store.ts',
	output: {
		path: '.',
		filename: 'x.js',
	},
	resolve: {
		extensions: ['', '.js', '.ts'],
	},
	module: {
		loaders: [
		{ 
			test: /\.ts/,
			loader: 'webpack-typescript?target=ES5',
		}
		],
	}
};
