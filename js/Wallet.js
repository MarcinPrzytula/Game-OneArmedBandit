class Wallet {
  constructor(startMoney) {
    let _money = startMoney;

    this.getWalletValue = () => {
      return _money;
    };

    this.checkCanPlay = (bid) => {
      if (_money >= bid) return true;
      else return false;
    };

    this.changeWallet = (bid, result = "") => {
      if (result) {
        return (_money += bid);
      } else if (!result) {
        return (_money -= bid);
      }
    };
  }
}
