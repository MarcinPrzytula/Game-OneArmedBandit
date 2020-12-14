class Draw {
    constructor() {
        this.options = ["url(/img/1.PNG)", "url(/img/2.PNG)", "url(/img/3.PNG)"];
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