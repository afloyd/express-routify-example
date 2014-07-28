module.exports = function (router, mountPath, opts) {
	/* GET home page. */
	router.route('/')
		.get(function(req, res) {
			res.render('index', { title: 'Express' });
	});

	return {
		get: {url: mountPath}
	};
};
