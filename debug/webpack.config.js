const path = require("path");

const RuiosPlugin = require("./plugin/ruios/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	context: __dirname,
	mode: "development",
	entry: {
		index1: "./src/index.js",
		index2: "./src/index2.js",
		main: "./src/main.js"
	},
	// entry: "./src/main.js",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./disc")
	},
	resolve: {
		alias: {
			"@utils": path.resolve(__dirname, "./utils")
		}
	},
	devServer: {
		contentBase: "./disc"
	},
	module: {
		rules: [
			{
				test: /\.ruios$/,
				use: [
					{ loader: path.resolve(__dirname, "./loader/ruios/index.js") }
				]
			},
			{
				test: /\.css$/,
				use: "css-loader"
			}
		]
	},
	plugins: [new RuiosPlugin(), new CleanWebpackPlugin()],
	devtool: "inline-source-map"
	// target: "node"
};
