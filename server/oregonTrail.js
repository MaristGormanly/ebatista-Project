const express = require('express');
const app = express();
app.use(express.static('client/public'));
const port = 1337

app.get('/global.css', function (req, res) {
  res.sendFile('global.css', {root: './client/public/css'})
})

app.get('/global.js', function (req, res) {
  res.sendFile('global.js', {root: './client/public/js'})
})

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views'})
})

app.get('/index.js', function (req, res) {
  res.sendFile('index.js', {root: './client/public/js'})
})

app.get('/index.css', function (req, res) {
  res.sendFile('index.css', {root: './client/public/css'})
})

app.get('/mainmenu', function (req, res) {
  res.sendFile('mainmenu.html', {root: './client/views'})
})

app.get('/mainmenu.js', function (req, res) {
  res.sendFile('mainmenu.js', {root: './client/public/js'})
})

app.get('/mainmenu.css', function (req, res) {
  res.sendFile('mainmenu.css', {root: './client/public/css'})
})

app.get('/topten', function (req, res) {
  res.sendFile('topten.html', {root: './client/views'})
})

app.get('/topten.js', function (req, res) {
  res.sendFile('topten.js', {root: './client/public/js'})
})

app.get('/topten.css', function (req, res) {
  res.sendFile('topten.css', {root: './client/public/css'})
})

app.get('/setup', function (req, res) {
  res.sendFile('setup.html', {root: './client/views'})
})

app.get('/setup.js', function (req, res) {
  res.sendFile('setup.js', {root: './client/public/js'})
})

app.get('/setup.css', function (req, res) {
  res.sendFile('setup.css', {root: './client/public/css'})
})

app.get('/trail', function (req, res) {
  res.sendFile('trail.html', {root: './client/views'})
})

app.get('/trail.js', function (req, res) {
  res.sendFile('trail.js', {root: './client/public/js'})
})

app.get('/trail.css', function (req, res) {
  res.sendFile('trail.css', {root: './client/public/css'})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
