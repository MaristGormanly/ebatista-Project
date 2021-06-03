const express = require('express');
const app = express();
app.use(express.static('client/public'));
const port = 1337
var bodyParser = require('body-parser')
app.use(express.json());
var setupController = require('./controllers/setupController');
var gameController = require('./controllers/gameController')
var topTenController = require('./controllers/topTenController');


app.get('/fonts/press-start-2p-v9-latin-regular.eot', function (req, res) {
  res.sendFile('press-start-2p-v9-latin-regular.eot', {root: './client/public/fonts'})
})

app.get('/fonts/press-start-2p-v9-latin-regular.woff2', function (req, res) {
  res.sendFile('press-start-2p-v9-latin-regular.woff2', {root: './client/public/fonts'})
})

app.get('/fonts/press-start-2p-v9-latin-regular.woff', function (req, res) {
  res.sendFile('press-start-2p-v9-latin-regular.woff', {root: './client/public/fonts'})
})

app.get('/fonts/press-start-2p-v9-latin-regular.ttf', function (req, res) {
  res.sendFile('press-start-2p-v9-latin-regular.ttf', {root: './client/public/fonts'})
})

app.get('/music.mp3', function (req, res) {
  res.sendFile('music.mp3', {root: './client/public/music'})
})

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

app.get('/nameSetup', function (req, res) {
  res.sendFile('nameSetup.html', {root: './client/views'})
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

app.route('/api/setup/profession')
  .get(setupController.getProfession)
  .post(setupController.saveProfession);

app.route('/api/setup/player')
  .get(setupController.getAllPlayerNames)
  .post(setupController.saveName);

app.route('/api/game')
  .get(gameController.getGameData)
  .patch(gameController.updateGame)
  .delete(gameController.resetGame);

app.route('/api/game/pace')
  .get(gameController.getPace)
  .patch(gameController.changePace);

app.route('/api/game/weather')
  .get(gameController.getWeather)
  .patch(gameController.changeWeatherByID);

app.route('/api/game/terrain')
  .get(gameController.getTerrain)
  .patch(gameController.changeTerrainByID);

app.route('/api/game/status/:statusID')
  .get(gameController.getStatusByID)
  .patch(gameController.changeStatusByID);

app.route('/api/game/money')
  .get(gameController.getMoney)
  .patch(gameController.changeMoney);

app.route('/api/game/miles')
  .get(gameController.getMilesTravelled)
  .patch(gameController.changeMilesTravelled);

app.route('/api/game/health')
  .get(gameController.getHealth)
  .patch(gameController.changeHealth);

app.route('/api/game/days')
  .get(gameController.getDaysOnTrail)
  .patch(gameController.changeDaysOnTrail);

app.route('/api/topTen')
  .get(topTenController.getCurrentScores)
  .patch(topTenController.addScore)
  .delete(topTenController.deleteScoreByID);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
