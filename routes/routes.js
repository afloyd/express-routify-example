module.exports = function (router, mountPath, opts) {
	router.route('/')
		.get(function getRoutes(req, res, next) {
			console.log('routes', require('util').inspect(opts.lib.routes, 0, null, true));
			res.json({routes: opts.lib.routes});
		});

	return {
		get: {
			url: mountPath
		}
	};
};