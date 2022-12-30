const formidable = require('formidable')
const Experience = require('../models/Experience')
const fs = require('fs')
const _ = require('lodash')

exports.getAllExperiences = (req, res) => {
    Experience.find().select('-image').exec((err, experience) => {
        if (err)
            return res.status(404).json({ err: "Data not found" })
        return res.json({ experience })
    })
}

exports.getExperience = (req, res) => {
    req.experience.image = undefined
    return res.json({ experience: req.experience })
}

exports.getfile = (req, res) => {
    const { data, contentType } = req.experience.image
    if (data) {
        res.set('Content-Type', contentType)
        return res.send(data)
    }
}

exports.createExperience = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        if (files.image) {
            if (files.image.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image should be less than 10 mb in size !'
                })
            let experience = new Experience(fields)
            experience.image.data = fs.readFileSync(files.image.path)
            experience.image.contentType = files.image.type
            experience.save((err, experience) => {
                if (err)
                    return res.status(400).json({
                        error: 'experience not persist'
                    })
                experience.image = undefined
                return res.json({
                    experience
                })
            })
        }
    })
}

exports.updateExperience = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        let experience = req.experience
        experience = _.extend(experience, fields)
        if (files.image) {
            if (files.image.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image should be less than 10 mb in size !'
                })
            user.image.data = fs.readFileSync(files.image.path)
            user.image.contentType = files.image.type
        }
        experience.save((err, experience) => {
            if (err)
                return res.status(400).json({
                    error: 'experience not updated'
                })
            experience.image = undefined
            return res.json({
                experience
            })
        })
    })
}