const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({
  dest: 'express/images/',
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'))
    }
  }
});

const port = 8080;

app.use(express.static('express/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jsonData = fs.readFileSync('express/data/submissions.json');
const data = JSON.parse(jsonData);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'express/views'));

app.get('/', (req, res) => {
  res.render('homepage.ejs');
});

app.get('/artpage', (req, res) => {
  res.render('artpage.ejs');
});

app.get('/login', (req, res) => {
  res.render('login_page.ejs');
});

app.post('/submit', upload.single('image'), (req, res, next) => {
  const { username, title, description } = req.body;

  // Check if the username already exists in the submissions data
  const user = data.users.find((user) => user.username === username);

  if (!user) {
    return res
      .status(404)
      .send(
        'This username does not exist. Please create a new account or sign in if you already have one.'
      );
  }

  if (!req.file) {
    return res.status(400).send('Please select an image file.');
  }

  // Add new submission to the user's submissions and save to file
  const ext = path.extname(req.file.originalname).toLowerCase();
  const filename = `${Date.now()}${ext}`;
  fs.renameSync(req.file.path, `express/images/${filename}`);
  user.submissions.push({
    title,
    image: `../images/${filename}`,
    description,
  });

  const updatedJsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('express/data/submissions.json', updatedJsonData);

  res.send('Submission added successfully!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
