class Draw {
  constructor() {
    this.options = [
      'url("img/cherry.PNG")',
      'url("img/lemon.PNG")',
      'url("img/waterlemon.PNG")',
    ];
  }

  drawResult() {
    const result = [];

    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      result.push(this.options[index]);
    }

    return result;
  }
}
