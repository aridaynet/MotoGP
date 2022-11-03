var jwt = require('jsonwebtoken');

function generateToken(user){
    if(!user)return null;

    var u = {
        id: user.id,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin,
        password: user.password
    };

    return jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    });
}