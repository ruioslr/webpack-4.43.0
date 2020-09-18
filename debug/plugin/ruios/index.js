const PluginName = "RuiosWebpackPlugin";

module.exports = class {
	apply(complier) {
		// addEntry
		// complier.hooks.compilation.tap(PluginName, compilation => {
		// 	compilation.hooks.addEntry.tap(PluginName, (entry, name) =>
		// 		console.log(entry)
		// 	);
		// });

		// normalModuleFactory
		complier.hooks.normalModuleFactory.tap(PluginName, normalModuleFactory => {
			normalModuleFactory.hooks.beforeResolve.tapAsync(
				PluginName,
				(res, cb) => {
					cb();
				}
			);
		});
	}
};
