module.exports = function ruios(content) {
	console.log("ruois-loader");
	return content;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
	console.log("ruios-loader-pitch");
	console.log(remainingRequest);
};
