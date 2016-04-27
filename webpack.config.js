module.exports = {
	entry: './app.tsx',
	output: {
		path: './bld',
		filename: 'x.js',
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx'],
	},
	module: {
		loaders: [
		{ 
			test: /\.tsx?$/,
			loader: 'ts',
		}
		],
	}
};
