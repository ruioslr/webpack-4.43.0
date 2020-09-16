const webpack = require("../lib/webpack");

const config = require("./webpack.config.js");

const compiler = webpack(config);

compiler.run((err, stats) => {
	if (err) {
		console.log(err);
	} else {
		// console.log(
		// 	stats.toString({
		// 		chunks: true, // 使构建过程更静默无输出
		// 		colors: true // 在控制台展示颜色
		// 	})
		// );
	}
});
