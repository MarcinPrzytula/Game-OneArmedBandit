class Draw {
    constructor() {
        this.options = ["red", "green", "blue"];
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