const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ["frontend", "backend", "mobile", "other"]
    },
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    pourcentage: {
        type: Number,
        required: true
    },
    icon: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Skill', skillSchema)