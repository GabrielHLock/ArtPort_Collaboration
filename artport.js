const fs = require ('fs')
const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))




app.get('/',(req,res)=>
	res.render('test_htmldisplay.ejs')
)

// code to submit the form data to the json file (try later when you get the power back at home)

//app.use(express.static('data'))
//app.use (express.static('uploads'))
//app.use (express.static('images'))

// app.post('/submit', (req, res) => {
// 	const { username, title, description } = req.body;
// 	const photo = req.files.photo;
  
// 	// Create a new file name for the uploaded photo
// 	const fileName = Date.now() + '-' + photo.name;
  
// 	// Use fs to write the file to disk
// 	fs.writeFile(`uploads/${fileName}`, photo.data, (err) => {
// 	  if (err) {
// 		console.error(err);
// 		res.sendStatus(500);
// 	  } else {
// 		// Read the submissions.json file and parse the data into an object
// 		fs.readFile('data/submissions.json', 'utf8', (err, data) => {
// 		  if (err) {
// 			console.error(err);
// 			res.sendStatus(500);
// 		  } else {
// 			const submissionsObj = JSON.parse(data);
  
// 			// Find the user object that matches the submitted username
// 			const user = submissionsObj.users.find(user => user.username === username);
  
// 			// If the user object does not exist, create a new one and add it to the users array
// 			if (!user) {
// 			  submissionsObj.users.push({ username, submissions: [] });
// 			}
  
// 			// Add the new submission to the user's submissions array
// 			submissionsObj.users.forEach(user => {
// 			  if (user.username === username) {
// 				user.submissions.push({ title, image: fileName, description });
// 			  }
// 			});
  
// 			// Write the updated data to the submissions.json file
// 			const newData = JSON.stringify(submissionsObj);
// 			fs.writeFile('data/submissions.json', newData, (err) => {
// 			  if (err) {
// 				console.error(err);
// 				res.sendStatus(500);
// 			  } else {
// 				console.log('New submission added');
// 				res.sendStatus(200);
// 			  }
// 			});
// 		  }
// 		});
// 	  }
// 	});
//   });


app.get('/artpage',(req,res)=>
	res.render('artpage')
)

app.listen(8080,()=>console.log("server running"))
