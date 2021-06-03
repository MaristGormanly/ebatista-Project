

const professions = [{name:"Banker", startingMoney: 1600}, {name:"Farmer", startingMoney: 400}, {name:"Carpenter", startingMoney: 800}];

function startInfo(profession, month, names){
    this.profession = profession;
    this.month = month;
    this.names = names;
}

    function gameData(start, status, playerMoney, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain){
        this.start=start;
        this.status = status;
        this.playerMoney = playerMoney
        this.milesTraveled = milesTraveled;
        this.groupHealth = groupHealth;
        this.currentPace = currentPace;
        this.daysOnTrail = daysOnTrail;
        this.currentWeather = currentWeather;
        this.currentTerrain = currentTerrain;
}
function player(name, status = Boolean){
    this.name = name;
    this.status = status;
}

exports.professionList = professions;

exports.createPlayer = function(name, status){
    return new player(name, status);
}

exports.initialInfo = function(profession, month, names){
    return new startInfo(profession, month, names);
}

exports.createGameData = function(start, status, playerMoney, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain){
    return new gameData(start, status, playerMoney, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain);
}
