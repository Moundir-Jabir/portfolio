const express = require('express')
const router = express.Router()
const { updateUser, getUser, getfile } = require("../controllers/userController")
const { userById } = require("../middlewares/user")
const { requireSignin, isAuth } = require("../middlewares/auth")
const { userFile } = require("../middlewares/file")

router.put('/', [requireSignin, isAuth, userById], updateUser)
router.get('/', getUser)
router.get('/:file', getfile)

router.param('file', userFile)

module.exports = router