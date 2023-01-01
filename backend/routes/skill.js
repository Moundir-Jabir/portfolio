const express = require('express')
const router = express.Router()
const { getAllSkills, getSkill, createSkill, getfile, updateSkill } = require("../controllers/skillController")
const { skillById } = require("../middlewares/skill")
const { requireSignin, isAuth } = require("../middlewares/auth")

router.get('/', getAllSkills)
router.get('/:id', getSkill)
router.get('/image/:id', getfile)
router.post('/', [requireSignin, isAuth], createSkill)
router.put('/:id', [requireSignin, isAuth], updateSkill)

router.param("id", skillById)

module.exports = router