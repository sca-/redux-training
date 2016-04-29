module.exports = {
	entry: './app.tsx',
	output: {
		path: './bld',
		filename: 'x.js',
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx', '.less'],
	},
	module: {
		loaders: [
			{ 
				test: /\.tsx?$/,
				loader: 'ts',
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			}
		],
	}
};
