const express = require('express')
const router = express.Router()
const { getAllPortfolio, getPortfolio, createPortfolio, getfile, updatePortfolio } = require("../controllers/portfolioController")
const { portfolioById } = require("../middlewares/portfolio")
const { requireSignin, isAuth } = require("../middlewares/auth")

router.get('/', getAllPortfolio)
router.get('/:id', getPortfolio)
router.get('/image/:id', getfile)
router.post('/', [requireSignin, isAuth], createPortfolio)
router.put('/:id', [requireSignin, isAuth], updatePortfolio)

router.param("id", portfolioById)

module.exports = router