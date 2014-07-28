module.exports = function (router, mountPath, opts) {
	router.route('/')
		.get(function (req, res, next) {
			res.json({photoUrl: '/photo/userId-' + res.locals.userId + '.jpg'});
		})

	return {
		get: {
			url: mountPath
		}
	};
};

var x = {
	"index":{"get":{"url":"/"}},
	"routes":{"get":{"url":"/routes"}},
	"user":{"index":{"get":{"url":"/user/"},"post":{"usl":"/user/","body":{"name":"foo","email":"foo@bar.com"}}},
		":userId":{"index":{"delete":{"url":"/user/:userId/"}},
			"profilePhoto":{"delete":{"url":"/user/:userId/profilePhoto"}}}}}