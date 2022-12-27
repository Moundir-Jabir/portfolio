const mongoose = require('mongoose')
const crypto = require('crypto')
const { v1 } = require('uuid')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    title: {
        type: String,
        trim: true,
        maxlength: 50
    },
    description: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50,
        unique: true
    },
    salt: String,
    hashed_password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        trim: true
    },
    image1: {
        data: Buffer,
        contentType: String
    },
    image2: {
        data: Buffer,
        contentType: String
    },
    cv: {
        data: Buffer,
        contentType: String
    },
    city: {
        type: String
    },
    links: {
        type: Array,
        default: []
    }
}, { timestamps: true })

userSchema.virtual('password').set(function (password) {
    this._password = password
    this.salt = v1()
    this.hashed_password = this.cryptPassword(password)
}).get(function () {
    return this._password
})

userSchema.methods = {
    authenticated: function (text) {
        return this.cryptPassword(text) === this.hashed_password
    },
    cryptPassword: function (password) {
        if (!password)
            return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', userSchema)