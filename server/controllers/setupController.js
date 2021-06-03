var pace = require('../models/pace.js');
var gamedata = require('../models/gameData.js');
var terrain = require ('../models/terrain.js')
var weather = require('../models/weather.js')
var startMonth;
var profession = gamedata.professionList[0];

var statuses = [];
var players = [];
var names = [];

var player1 = gamedata.createPlayer("Manny", true);
var player2  = gamedata.createPlayer("Sofia", true);
var player3 = gamedata.createPlayer("Max", true);
var player4 = gamedata.createPlayer("Meg", true);
var player5 = gamedata.createPlayer("Aaron", true);

players.push(player1, player2, player3, player4, player5);
statuses.push(player1.status, player2.status, player3.status, player4.status, player5.status);
names.push(player1.name, player2.name, player3.name, player4.name, player5.name);

var initialInput = gamedata.initialInfo(profession, 'March', players);

exports.saveName = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var newName = req.body;
    players.push(newName);
    statuses.push(newName.status);
    names.push(newName.name);
    res.send(newName);
}


exports.getAllPlayerNames = function (req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(names);
}


exports.getStartingMoney = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(profession.startingMoney);
}
exports.saveProfession = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    profession = req.body;
    res.send(profession); 
}
exports.getProfession = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(profession.name);
}

exports.saveStartMonth = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    startMonth = req.body;
    res.send(StartMonth);
}

exports.getStartMonth = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(StartMonth)

}
exports.startGame = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentGameData)
}



var currentGameData = gamedata.createGameData(initialInput,statuses, profession.startingMoney, 0, 100, pace.getPace(0) , 0, weather.getWeather(0), terrain.getTerrain(1));

exports.currentGameData = currentGameData;



