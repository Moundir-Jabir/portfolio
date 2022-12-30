const User = require('../models/User')

exports.userById = (req, res, next) => {
    User.findById(req.auth._id).exec((err, user) => {
        if (err || !user)
            return res.status(404).json({
                erreur: 'user not found'
            })
        req.user = user
        next()
    })
}