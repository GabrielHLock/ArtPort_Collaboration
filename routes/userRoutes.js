const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>
	res.send("Home Page")
)

router.get('/about',(req,res)=>
	res.json(["one","two","three"])
)

router.get('/about',(req,res)=>
	res.send("About us Page")
)

module.exports = router
