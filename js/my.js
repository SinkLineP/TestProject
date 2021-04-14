let count = 0;
let countCoin = 0;
let btnMoney = document.getElementById("click-money");
let textCountMoney = document.getElementById("count-money");
let trade = document.getElementById("trade");
let textCountCoin = document.getElementById("count-coin");
let errorMoney = document.getElementById("error-money");

function money() {
    count++
    textCountMoney.innerHTML = "Листиков: " + count;

    if (count == 10) {
        trade.innerHTML = "Ура первый заработок) 10/10 листиков. <button onclick='trademoneytocoin()'>Trade</button>";
    }
}

function trademoneytocoin() {
    if (count >= 10) {
        count -= 10;
        countCoin += 2;
    } else {
        errorMoney.innerHTML = "don`t money!";
    }

    
    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}