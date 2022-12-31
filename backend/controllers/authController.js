const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user)
            return res.status(400).json({
                erreur: 'Not found user with this email'
            })
        if (!user.authenticated(password))
            return res.status(401).json({
                erreur: 'Incorect password'
            })
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        res.cookie('token', token, { expire: new Date() + 8062000 })
        user.hashed_password = undefined
        user.salt = undefined
        user.image1 = undefined
        user.image2 = undefined
        user.cv = undefined
        return res.json({ token, user })
    })
}

exports.logout = (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'User Logout' })
}