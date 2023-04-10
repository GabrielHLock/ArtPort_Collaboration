const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const jsonData = fs.readFileSync('data/submissions.json');
let submissionsData = JSON.parse(jsonData).users;

app.set("view engine","ejs")
app.get ('/',(req,res)=>
res.render('testUpload'))

app.post('/submit', (req, res) => {
  res.send(req.body);
  // const { username, title, image, description } = req.body;

  // Check if the username already exists in the submissions data
//   const user = submissionsData.find(user => user.username === username);
// console.log(user, username);
//   if (!user) {
//     return res.status(404).send('This username does not exist. Please create a new account or sign in if you already have one.');
//   }

//   // Add new submission to the user's submissions and save to file
//   user.submissions.push({ title, image, description });
//   fs.writeFileSync('submissions.json', JSON.stringify({ users: submissionsData }));

//   res.send('Submission added successfully!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});