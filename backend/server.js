app.use(function (req, res, next) {
    var token = req.headers['authorization'];
    if (!token) return next();

    if (req.headers.authorization.indexOf('Basic ') === 0) {
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');

        req.body.username = username;
        req.body.password = password;

        return next();
    }

    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        } else {
            req.user = user;
            req.token = token;
            next();
        }
    });
});

