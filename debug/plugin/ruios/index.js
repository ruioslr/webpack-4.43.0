const PluginName = "RuiosWebpackPlugin";

module.exports = class {
	apply(complier) {
		complier.hooks.run.tap(PluginName, compilation => {
			console.log("webpack 构建过程开始！");
		});
	}
};
