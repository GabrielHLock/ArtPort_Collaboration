const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/',(req,res)=>
	res.render('main')
)

app.get('/artpage',(req,res)=>
	res.render('artpage')
)

app.listen(8080,()=>console.log("server running"))
