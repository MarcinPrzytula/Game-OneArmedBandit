class Game {
    constructor(start) {
        this.draw = new Draw;
        this.wallet = new Wallet(start);
        this.scoreBoard = new ScoreBoard;
        this.drawScreens = [...document.querySelectorAll(".drawScreens div")];
        this.input = document.querySelector(".userInterface input");
        this.button = document.querySelector(".userInterface button");
        this.resultInfo = document.querySelector(".scoreBoard .result");
        this.walletInfo = document.querySelector(".scoreBoard .walletCondition");
        this.numberOfGamesInfo = document.querySelector(".scoreBoard .numberOfGames");
        this.wonGamesInfo = document.querySelector(".scoreBoard .wonGames");
        this.lostGamesInfo = document.querySelector(".scoreBoard .lostGames");

        this.button.addEventListener("click", this.startGame.bind(this));
        this.render()
    }

    // render(colorsDraw = ["#00fff2", "#00fff2", "#00fff2"], wallet = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, numberOfMoney = 0) {
    render({
        colorsDraw = ["#00fff2", "#00fff2", "#00fff2"],
        wallet = this.wallet.getWalletValue(),
        result = "",
        stats = [0, 0, 0],
        bid = 0,
        numberOfMoney = 0
    } = {}) {

        this.drawScreens.forEach((drawScreen, i) => {
            drawScreen.style.backgroundColor = colorsDraw[i];
        });

        this.walletInfo.textContent = wallet;

        if (result) {
            this.resultInfo.textContent = `You won: ${numberOfMoney} $`;
        } else if (!result && result !== "") {
            this.resultInfo.textContent = `You have lost ${bid} $`;
        }

        this.numberOfGamesInfo.textContent = stats[0];
        this.wonGamesInfo.textContent = stats[1];
        this.lostGamesInfo.textContent = stats[2];
    }

    startGame() {
        this.button.classList.toggle("rotate");

        this.drawScreens.forEach((drawScreen, i) => {
            drawScreen.classList.add("animation");
        })

        setTimeout(function () {
            game.drawScreens.forEach((drawScreen, i) => {
                drawScreen.classList.remove("animation");
            });
        }, 1000);


        const bid = Math.floor(this.input.value);
        const canPlay = this.wallet.checkCanPlay(bid);

        if (bid < 1) return alert("You cannot wager less than 1$");
        if (!canPlay) return alert("You don't have that much money!");

        this.wallet.changeWallet(bid);
        const colors = this.draw.drawResult();

        const resultGame = Result.checkResult(colors);
        const numberOfMoney = Result.changeMoney(resultGame, bid);


        this.wallet.changeWallet(numberOfMoney, resultGame);
        this.scoreBoard.addGameToScoreBoard(resultGame, bid);

        this.walletInfo.textContent = this.wallet.getWalletValue();
        // this.render(colors, this.wallet.getWalletValue(), resultGame, this.scoreBoard.showScoreBoard(), bid, numberOfMoney){
        this.render({
            bid,
            colorsDraw: colors,
            wallet: this.wallet.getWalletValue(),
            numberOfMoney,
            result: resultGame,
            stats: this.scoreBoard.showScoreBoard(),
        })
        this.input.value = "";
    }
}

const game = new Game(100);