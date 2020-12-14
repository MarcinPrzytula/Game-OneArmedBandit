class Draw {
    constructor() {
        this.options = ['url("img/cherry.png")', 'url("img/lemon.png")', 'url("img/waterlemon.png")'];
    }
    drawResult() {
        const colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            colors.push(this.options[index]);
        }

        return colors
    }
}