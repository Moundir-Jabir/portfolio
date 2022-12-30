const formidable = require('formidable')
const User = require('../models/User')
const fs = require('fs')
const Joi = require('joi')
const _ = require('lodash')

exports.updateUser = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        let user = req.user
        const schema = Joi.object({
            name: Joi.string().required().max(50),
            title: Joi.string().required().max(50),
            city: Joi.string().required().max(50),
            description: Joi.string().required().max(500),
            email: Joi.string().required().max(50).email(),
            password: Joi.string().required().max(50),
            phone: Joi.string().required().max(20)
        })
        const { error } = schema.validate(fields)
        if (error)
            return res.status(400).json({
                error: error.details[0].message
            })
        user = _.extend(user, fields)
        if (files.image1) {
            if (files.image1.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image1 should be less than 10 mb in size !'
                })
            user.image1.data = fs.readFileSync(files.image1.path)
            user.image1.contentType = files.image1.type
        }
        if (files.image2) {
            if (files.image2.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image2 should be less than 10 mb in size !'
                })
            user.image2.data = fs.readFileSync(files.image2.path)
            user.image2.contentType = files.image2.type
        }
        if (files.cv) {
            if (files.cv.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'cv should be less than 10 mb in size !'
                })
            user.cv.data = fs.readFileSync(files.cv.path)
            user.cv.contentType = files.cv.type
        }
        user.save((err, user) => {
            if (err)
                return res.status(400).json({
                    error: 'User not updated'
                })
            user.hashed_password = undefined
            user.salt = undefined
            user.image1 = undefined
            user.image2 = undefined
            user.cv = undefined
            return res.json({
                user
            })
        })
    })
}

exports.getUser = (req, res) => {
    User.findById("63ab65a459555f04ce69fd21").select('-hashed_password -salt -image1 -image2 -cv').exec((err, user) => {
        if (err || !user)
            return res.status(404).json({
                erreur: 'user not found'
            })
        return res.json({ user })
    })
}

exports.getfile = (req, res) => {
    const { data, contentType } = req.file
    if (data) {
        res.set('Content-Type', contentType)
        return res.send(data)
    }
}