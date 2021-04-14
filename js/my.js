let count = 0;
let countCoin = 0;
let btnMoney = document.getElementById("click-money");
let textCountMoney = document.getElementById("count-money");
let trade = document.getElementById("trade");
let trade2 = document.getElementById("trade2");
let trade3 = document.getElementById("trade3");
let trade4 = document.getElementById("trade4");
let trade5 = document.getElementById("trade5");
let trade6 = document.getElementById("trade6");
let trade7 = document.getElementById("trade7");
let trade8 = document.getElementById("trade8");
let trade9 = document.getElementById("trade9");
let textCountCoin = document.getElementById("count-coin");
let errorMoney = document.getElementById("error-money");
let dost = document.getElementById("dost");

errorMoney.style.display = "none"

function money() {
    count++
    textCountMoney.innerHTML = "Листиков: " + count;

    if (count == 10) {
        trade.innerHTML = "Ура первый заработок) 10 листиков.<br> <button onclick='tradeOne()'>Trade</button>";
    }

    if (count == 50) {
        trade2.innerHTML = "Да ты упрям! 50 листиков.<br> <button onclick='tradeTwo()'>Trade</button>";
    }
    if (count == 100) {
        trade3.innerHTML = "Хватит! 100 листиков.<br> <button onclick='tradeThree()'>Trade</button>";
    }
    if (count == 200) {
        trade4.innerHTML = "Скоро будет у кого-то донатик! 200 листиков.<br> <button onclick='tradeFo()'>Trade</button>";
    }
    if (count == 300) {
        trade5.innerHTML = "Блин, уже тут. 300 листиков<br> <button onclick='tradeFive()'>Trade</button>";
    }
    if (count == 500) {
        trade6.innerHTML = "Удачи! 500 листиков<br> <button onclick='tradeSix()'>Trade</button>";
    }
    if (count == 1000) {
        trade7.innerHTML = "Уровень БОГ! 1000 листиков.<br> <button onclick='tradeSeven()'>Trade</button>";
    }
    if (count == 1500) {
        trade8.innerHTML = "Ты Читер!!? 1500 листиков.<br> <button onclick='tradeEight()'>Trade</button>";
    }
    if (count == 3000) {
        trade9.innerHTML = "Моё почтенье тебе! 3000 листиков.<br> <button onclick='tradeNine()'>Trade</button>";
    }
}


function tradeOne() {
    if (count >= 10) {
        count -= 10;
        countCoin += 2;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}

function tradeTwo() {
    if (count >= 50) {
        count -= 50;
        countCoin += 6;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}

function tradeThree() {
    if (count >= 100) {
        count -= 100;
        countCoin += 12;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}

function tradeFo() {
    if (count >= 200) {
        count -= 200;
        countCoin += 36; 
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
    
}

function tradeFive() {
    if (count >= 300) {
        count -= 300;
        countCoin += 64;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}

function tradeSix() {
    if (count >= 500) {
        count -= 500;
        countCoin += 100;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
} 

function tradeSeven() {
    if (count >= 1000) {
        count -= 1000;
        countCoin += 230;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}

function tradeEight() {
    if (count >= 1500) {
        count -= 1500;
        countCoin += 490;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}

function tradeNine() {
    if (count >= 3000) {
        count -= 3000;
        countCoin += 720;
    } else {
        errorMoney.style.display = "block"
    }

    textCountMoney.innerHTML = "Листиков: " + count;
    textCountCoin.innerHTML = "Монеток: " + countCoin;
}
