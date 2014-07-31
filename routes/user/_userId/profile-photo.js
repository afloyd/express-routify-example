module.exports = function (router, mountPath, opts) {
	router.route('/')
		.get(function (req, res, next) {
			res.render('index', {data: {photoUrl: '/photo/userId-' + res.locals.userId + '.jpg'}});
		});
};