const formidable = require('formidable')
const Portfolio = require('../models/Portfolio')
const fs = require('fs')
const _ = require('lodash')

exports.getAllPortfolio = (req, res) => {
    Portfolio.find().select('-icon').exec((err, portfolio) => {
        if (err)
            return res.status(404).json({ err: "Data not found" })
        return res.json({ portfolio })
    })
}

exports.getPortfolio = (req, res) => {
    req.portfolio.icon = undefined
    return res.json({ portfolio: req.portfolio })
}

exports.getfile = (req, res) => {
    const { data, contentType } = req.portfolio.icon
    if (data) {
        res.set('Content-Type', contentType)
        return res.send(data)
    }
}

exports.createPortfolio = (req, res) => {
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
            let portfolio = new Portfolio(fields)
            portfolio.icon.data = fs.readFileSync(files.icon.path)
            portfolio.icon.contentType = files.icon.type
            portfolio.save((err, portfolio) => {
                if (err)
                    return res.status(400).json({
                        error: 'portfolio not persist'
                    })
                    portfolio.icon = undefined
                return res.json({
                    portfolio
                })
            })
        }
    })
}

exports.updatePortfolio = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        let portfolio = req.portfolio
        portfolio = _.extend(portfolio, fields)
        if (files.icon) {
            if (files.icon.size > Math.pow(10, 7))
                return res.status(400).json({
                    error: 'Image should be less than 10 mb in size !'
                })
                portfolio.icon.data = fs.readFileSync(files.icon.path)
                portfolio.icon.contentType = files.icon.type
        }
        portfolio.save((err, portfolio) => {
            if (err)
                return res.status(400).json({
                    error: 'portfolio not updated'
                })
                portfolio.icon = undefined
            return res.json({
                portfolio
            })
        })
    })
}