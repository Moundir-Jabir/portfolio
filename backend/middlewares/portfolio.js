const Portfolio = require('../models/Portfolio')

exports.portfolioById = (req, res, next, id) => {
    Portfolio.findById(id).exec((err, portfolio) => {
        if (err || !portfolio)
            return res.status(404).json({
                erreur: 'portfolio not found'
            })
        req.portfolio = portfolio
        next()
    })
}