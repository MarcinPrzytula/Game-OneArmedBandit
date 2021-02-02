class Stats {
  constructor() {
    this.gameResults = [];
  }

  addGameToStats(result, bid) {
    let gameResult = {
      result,
      bid,
    };

    this.gameResults.push(gameResult);
  }

  showStats() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((gameResult) => gameResult.result)
      .length;
    let losses = this.gameResults.filter((gameResult) => !gameResult.result)
      .length;

    return [games, wins, losses];
  }
}
