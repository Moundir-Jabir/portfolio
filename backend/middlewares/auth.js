const expressJWT = require('express-jwt')
// verifie si token existe
exports.requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
})
//verifie si user est autorisé
exports.isAuth = (req, res, next) => {
    if(!req.auth._id === "63ab65a459555f04ce69fd21")
        return res.status(403).json({
            error: 'Access denied'
        })
    next()
}