class TopTen {
    constructor(playerName, playerScore, dateEarned){
        this.playerName = playerName;
        this.playerScore = playerScore;
        this.dateEarned = dateEarned;
    }
}

exports.addScore = function(playerName, playerScore, dateEarned){
    return new TopTen(playerName, playerScore, dateEarned);
}