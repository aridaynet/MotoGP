exports.isAuthenticated = (req, res, next) => {
    var token = req.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is requiered."
        });
    }

    jwt.verify(token, process, env, JWT_SECRET, function (err, user) {

        if (err) return res.status(401).json({ error: true, message: "Invalid user." });

        User.findByPk(user.id)

            .then(data => {

                if (!user.id) {
                    return res.status(401).json({ error: true, message: "Invalid user." });
                }
                next();
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving User with id=" + id
                });
            });

        exports.signin = (req, res) => {
            const user = req.body.username;
            const pwd = req.body.password;

            if (!user || !pwd) {
                return res.status(400).json({ error: true, message: "Username and password are requiered." });
            }
            User.findOne({ where: { username: user } })
                .then(data => {
                    const result = bcrypt.compareSync(pwd, data.password);
                    if (!result) return res.status(401).send('Password is incorrect!');
                    const token = utils.generateToken(data);
                    const userObj = utils.getCleanUser(data);
                    return res.json({ user: userObj, acces_token: token });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error ocurred while retrieving motogp."
                    });
                });
        };
    });
};