const User = require('../models/User')

exports.userFile = (req, res, next, file) => {
    User.findById("63ab65a459555f04ce69fd21").select(file).exec((err, user) => {
        if (err || !user)
            return res.status(404).json({
                erreur: 'user not found'
            })
        req.file = user[file]
        next()
    })
}