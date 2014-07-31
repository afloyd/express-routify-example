module.exports = function (router, mountPath, opts) {
	opts.app.param('userId', function (req, res, next, userId) {
		res.locals.userId = userId;
		next();
	});

	router.route('/')
		.get(function (req, res, next) {
			res.render('index', {data: {
				id: Math.round(Math.random()*1000), //just something to randomize the data returned
				name: 'foo',
				email: 'foo@bar.com'
			}})
		})
		.delete(function (req, res, next) {
			res.json({deletedUserId: res.locals.userId});
		})
		.post(post);
};

function post(req, res, next) {
	res.json({
		id: Math.round(Math.random()*1000), //just something to randomize the data returned
		name: req.body.name,
		email: req.body.email
	});
}
post.prototype.body = {
	name: 'String',
	email: 'String'
};