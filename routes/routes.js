var opts;
module.exports = function (router, mountPath, routeOpts) {
	opts = routeOpts;
	router.route('/')
		.get(getRoutes);
};

function getRoutes(req, res, next) {
	console.log('routes', require('util').inspect(opts.lib.routes, 0, null, true));
	res.json({routes: opts.lib.routes});
}