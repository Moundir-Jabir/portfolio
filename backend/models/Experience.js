const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    lieu: {
        type: String,
        required: true,
        maxlength: 50
    },
    city: {
        type: String,
        maxlength: 50
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        required: true,
        maxlength: 300
    }
}, { timestamps: true })

module.exports = mongoose.model('Experience', experienceSchema)