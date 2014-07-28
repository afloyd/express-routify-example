module.exports = function (router, mountPath, opts) {
	router.route('/')
		.get(function (req, res, next) {
			res.render('user', {
				name: 'foo',
				email: 'foo@bar.com'
			});
		})
		.post(function (req, res, next) {
			res.json({
				id: Math.round(Math.random()*1000), //just something to randomize the data returned
				name: req.body.name,
				email: req.body.email
			});
		});

	return {
		get: {
			url: mountPath
		},
		post: {
			usl: mountPath,
			body: {
				name: 'foo',
				email: 'foo@bar.com'
			}
		}
	};
};