var topTen =  require('../models/topTen');

var currentTopScores = [];
currentTopScores.push(topTen.addScore("Max", 30, "10/31/2020"));
currentTopScores.push(topTen.addScore("John", 100, "04/10/2010"));
currentTopScores.push(topTen.addScore("John", 110, "05/10/2010"));
currentTopScores.push(topTen.addScore("Sally", 200, "05/20/2010"));


exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTopScores);
}

exports.addScore = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentTopScores.push(req.body);
    res.send(currentTopScores);
}

exports.deleteScoreByID = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentTopScores.splice(req.body.scoreID, 1);
    res.send(currentTopScores);
}