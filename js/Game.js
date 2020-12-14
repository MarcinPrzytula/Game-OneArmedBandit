class Game {
    constructor(start) {
        this.draw = new Draw;
        this.wallet = new Wallet(start);
        this.scoreBoard = new ScoreBoard;
        this.drawScreens = [...document.querySelectorAll(".drawScreens .draw")];
        this.animation = [...document.querySelectorAll(".drawScreens .draw div")]
        this.input = document.querySelector(".userInterface input");
        this.button = document.querySelector(".userInterface button");
        this.resultInfo = document.querySelector(".scoreBoard .result");
        this.walletInfo = document.querySelector(".scoreBoard .walletCondition");
        this.numberOfGamesInfo = document.querySelector(".scoreBoard .numberOfGames");
        this.wonGamesInfo = document.querySelector(".scoreBoard .wonGames");
        this.lostGamesInfo = document.querySelector(".scoreBoard .lostGames");
        this.red = document.querySelectorAll(".drawScreens .draw .red");
        this.green = document.querySelectorAll(".drawScreens .draw .green");
        this.blue = document.querySelectorAll(".drawScreens .draw .blue");


        this.red.forEach(item => item.style.backgroundImage = 'url("img/cherry.png")');
        this.green.forEach(item => item.style.backgroundImage = 'url("img/lemon.png")');
        this.blue.forEach(item => item.style.backgroundImage = 'url("img/waterlemon.png")');

        this.button.addEventListener("click", this.startGame.bind(this));
        this.render()
    }

    // render(colorsDraw = ["#00fff2", "#00fff2", "#00fff2"], wallet = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, numberOfMoney = 0) {
    render({
        colorsDraw = ['url("img/cherry.png")', 'url("img/lemon.png")', 'url("img/waterlemon.png")'],
        wallet = this.wallet.getWalletValue(),
        result = "",
        stats = [0, 0, 0],
        bid = 0,
        numberOfMoney = 0
    } = {}) {

        this.drawScreens.forEach((drawScreen, i) => {
            drawScreen.style.backgroundImage = colorsDraw[i];
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
        const bid = Math.floor(this.input.value);
        const canPlay = this.wallet.checkCanPlay(bid);

        if (bid < 1) return alert("You cannot wager less than 1$");
        if (!canPlay) return alert("You don't have that much money!");

        this.button.classList.toggle("rotate");

        this.animation.forEach((item, i) => {
            item.classList.add("onOff");
        });
        setTimeout(function () {
            this.animation.forEach((item, i) => {
                item.classList.remove("onOff");
            });
        }.bind(this), 2000)


        this.wallet.changeWallet(bid);
        const colors = this.draw.drawResult();

        const resultGame = Result.checkResult(colors);
        const numberOfMoney = Result.changeMoney(resultGame, bid);


        this.wallet.changeWallet(numberOfMoney, resultGame);
        this.scoreBoard.addGameToScoreBoard(resultGame, bid);

        setTimeout(function () {
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

        }.bind(this), 2000)
        this.input.value = "";

    }
}

const game = new Game(100);