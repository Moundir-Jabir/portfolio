const Skill = require('../models/Skill')

exports.skillById = (req, res, next, id) => {
    Skill.findById(id).exec((err, skill) => {
        if (err || !skill)
            return res.status(404).json({
                erreur: 'skill not found'
            })
        req.skill = skill
        next()
    })
}