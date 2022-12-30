const Experience = require('../models/Experience')

exports.experienceById = (req, res, next, id) => {
    Experience.findById(id).exec((err, experience) => {
        if (err || !experience)
            return res.status(404).json({
                erreur: 'experience not found'
            })
        req.experience = experience
        next()
    })
}