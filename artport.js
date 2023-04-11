const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/',(req,res)=>
	res.render('test_htmldisplay')
)

app.get('/artpage',(req,res)=>
	res.render('artpage')
)

app.get('/login',(req,res)=>
	res.render('login_page')
)


app.listen(8080,()=>console.log("server running"))
