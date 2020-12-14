class ScoreBoard {
    constructor() {
        this.gameResults = []
    }

    addGameToScoreBoard(result, bid) {
        let gameResult = {
            result,
            bid
        }
        this.gameResults.push(gameResult);
    }

    showScoreBoard() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(gameResult => gameResult.result).length;
        // let losses = games - wins;
        let losses = this.gameResults.filter(gameResult => !gameResult.result).length;
        return [games, wins, losses]
    }

}