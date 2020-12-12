class Wallet {
    constructor(startMoney) {

        let _money = startMoney;

        this.getWalletValue = () => {
            return _money
        };

        this.checkCanPlay = (bid) => {
            if (_money >= bid) return true;
            else return false;
        }

        this.changeWallet = (bid, result = "") => {
            if (result) {
                return _money += bid;
            } else if (!result) {
                return _money -= bid;
            }
        }
    }
}

// // const wallet = new Wallet(100);
// class Wallet {
//     constructor(money) {
//         let _money = money;
//         //pobieranie aktualnej zawartości portfela
//         this.getWalletValue = () => _money;

//         //Sprawdzanie czy użytkonik ma odpowiednią ilość środków

//         this.checkCanPlay = value => {
//             if (_money >= value) return true;
//             return false;
//         }

//         this.changeWallet = (value, type = "+") => {
//             if (typeof value === "number" && !isNaN(value)) {
//                 if (type === "+") {
//                     return _money += value;
//                 } else if (type === "-") {
//                     return _money -= value;
//                 } else {
//                     throw new Error("nieprawidłowy typ działania")
//                 }

//             } else {
//                 console.log(typeof value);
//                 throw new Error("nieprawdidłowa liczba")
//             }
//         }

//     }

// }