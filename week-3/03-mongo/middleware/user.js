function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;

    User.findOne({
        username: username,
        password: password
    }).then(function(value){
        if(value){
            next()
        }
        else{
            res.status(403).send("user not found")
        }
    })
}

module.exports = userMiddleware;