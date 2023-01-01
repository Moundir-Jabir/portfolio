const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    github: {
        type: String,
        required: true
    },
    icon: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Portfolio', portfolioSchema)