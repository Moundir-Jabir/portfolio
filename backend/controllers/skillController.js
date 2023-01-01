const formidable = require('formidable')
const Skill = require('../models/Skill')
const fs = require('fs')
const _ = require('lodash')

exports.getAllSkills = (req, res) => {
    Skill.find().select('-icon').exec((err, skill) => {
        if (err)
            return res.status(404).json({ err: "Data not found" })
        return res.json({ skill })
    })
}

exports.getSkill = (req, res) => {
    req.skill.icon = undefined
    return res.json({ skill: req.skill })
}

exports.getfile = (req, res) => {
    const { data, contentType } = req.skill.icon
    if (data) {
        res.set('Content-Type', contentType)
        return res.send(data)
    }
}

exports.createSkill = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        if (files.icon) {
            if (files.icon.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image should be less than 10 mb in size !'
                })
            let skill = new Skill(fields)
            skill.icon.data = fs.readFileSync(files.icon.path)
            skill.icon.contentType = files.icon.type
            skill.save((err, skill) => {
                if (err)
                    return res.status(400).json({
                        error: 'skill not persist'
                    })
                    skill.icon = undefined
                return res.json({
                    skill
                })
            })
        }
    })
}

exports.updateSkill = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        let skill = req.skill
        skill = _.extend(skill, fields)
        if (files.icon) {
            if (files.icon.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image should be less than 10 mb in size !'
                })
            skill.icon.data = fs.readFileSync(files.icon.path)
            skill.icon.contentType = files.icon.type
        }
        skill.save((err, skill) => {
            if (err)
                return res.status(400).json({
                    error: 'skill not updated'
                })
                skill.icon = undefined
            return res.json({
                skill
            })
        })
    })
}