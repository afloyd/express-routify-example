module.exports = function (router, mountPath, opts) {
	router.route('/')
		.get(function (req, res, next) {
			res.render('user', {
				name: 'foo',
				email: 'foo@bar.com'
			});
		})
		.post(post);
};

function post(req, res, next) {
	res.render('index', {data:{
		id: Math.round(Math.random()*1000), //just something to randomize the data returned
		name: req.body.name,
		email: req.body.email
	}});
}
post.prototype.body = {
	name: 'foo',
	email: 'foo@bar.com'
};
