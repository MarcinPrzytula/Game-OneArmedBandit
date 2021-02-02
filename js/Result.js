class Result {
  constructor() {}
  static checkResult(draw) {
    if (
      (draw[0] === draw[1] && draw[0] === draw[2]) ||
      (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
    ) {
      return true;
    } else {
      return false;
    }
  }
  static changeMoney(result, bid) {
    if (result === true) return bid * 3;
    else return 0;
  }
}
