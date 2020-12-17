class Stats {
    constructor() {
        this.gameResults = []
    }

    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
    }

    showStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(gameResult => gameResult.result).length;
        // let losses = games - wins;
        let losses = this.gameResults.filter(gameResult => !gameResult.result).length;
        return [games, wins, losses]
    }

}