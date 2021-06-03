var pace = require('../models/pace.js');
var gamedata = require('../models/gameData');
var terrain = require ('../models/terrain.js')
var weather = require('../models/weather.js')
var setup = require('../controllers/setupController');
var currentGameData = setup.currentGameData;


exports.updateGame = function (req, res) {
    var newGameData = currentGameData;
    if (req.body.playerstatus)
        newGameData.playerstatus = req.body.playerstatus;
    if (req.body.playerMoney)
        newGameData.playerMoney = req.body.playerMoney;
    if (req.body.milesTraveled)
        newGameData.milesTraveled = req.body.milesTraveled;
    if (req.body.groupHealth)
        newGameData.groupHealth = req.body.groupHealth;
    if (req.body.currentPace)
        newGameData.currentPace = req.body.currentPace;
    if (req.body.daysOnTrail)
        newGameData.daysOnTrail = req.body.daysOnTrail;
    if (req.body.currentWeather)
        newGameData.currentWeather = req.body.currentWeather;
    if (req.body.currentTerrain)
        newGameData.currentTerrain = req.body.currentTerrain;
    
    currentGameData = newGameData;
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData);
}


exports.resetGame = function (req, res){
    res.setHeader('Content-Type', 'application/json');
    currentGameData.groupHealth = 0;
    res.send(currentGameData);
}

exports.getGameData = function (req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData);
}

exports.getPace = function (req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log(currentGameData.currentPace);
    res.send (currentGameData.currentPace);
}

exports.changePace = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.currentPace = pace.getPace(req.body.pace);
    res.send(currentGameData.currentPace);
}

exports.getWeather = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData.currentWeather);
}

exports.changeWeatherByID = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.currentWeather = weather.getWeather(req.body.weatherID);
    console.log(req.body.weatherID);
    res.send(currentGameData.currentWeather);
}

exports.getTerrain = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(currentGameData.currentTerrain);
    res.send(currentGameData.currentTerrain);
}

exports.changeTerrainByID = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.currentTerrain = terrain.getTerrain(req.body.terrainID);
    res.send(currentGameData.currentTerrain);
}

exports.getStatusByID = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData.status[req.params.statusID]);
}

exports.changeStatusByID = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (currentGameData.status[req.params.statusID])
        currentGameData.status[req.params.statusID] = false;
    else
        currentGameData.status[req.params.statusID] = true;
    res.send(currentGameData.status);
}

exports.getMoney = function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    console.log(currentGameData.playerMoney);
    res.send(currentGameData.playerMoney.toString());
}

exports.changeMoney = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.playerMoney += req.body.moneyChange;
    res.send(currentGameData.playerMoney.toString());
}

exports.getMilesTravelled = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData.milesTraveled.toString());
}

exports.changeMilesTravelled = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.milesTraveled += Math.round(currentGameData.currentPace.mileChange * currentGameData.currentTerrain.mileChange * currentGameData.currentWeather.mileChange);
    res.send(currentGameData.milesTraveled.toString());
}

exports.getHealth = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData.groupHealth.toString());
}

exports.changeHealth = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.groupHealth += currentGameData.currentPace.healthChange + currentGameData.currentWeather.healthChange;
    res.send(currentGameData.groupHealth.toString());
}

exports.getDaysOnTrail = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData.daysOnTrail.toString());
}

exports.changeDaysOnTrail = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.daysOnTrail += 1;
    res.send(currentGameData.daysOnTrail.toString());
}






    


