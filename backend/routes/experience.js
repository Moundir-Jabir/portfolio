const express = require('express')
const router = express.Router()
const { getAllExperiences, getExperience, createExperience, getfile, updateExperience } = require("../controllers/experienceController")
const { experienceById } = require("../middlewares/experience")
const { requireSignin, isAuth } = require("../middlewares/auth")

router.get('/', getAllExperiences)
router.get('/:id', getExperience)
router.get('/image/:id', getfile)
router.post('/', [requireSignin, isAuth], createExperience)
router.put('/:id', [requireSignin, isAuth], updateExperience)

router.param("id", experienceById)

module.exports = router