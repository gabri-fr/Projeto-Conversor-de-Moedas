const convertButton = document.querySelector(".convert-button")
const moneySelect = document.querySelector(".select-money")



function convertValues() {
    const inputMoneyValue = document.querySelector(".input-money").value
    const moneyValueConvert = document.querySelector(".money-value") // VALOR EM REAL 
    const valueConverted = document.querySelector(".converted-money-value") // VALOR CONVERTIDO

    const dolarTodey = 5.2
    const euroTdoey = 6.2
    const libraToday = 6.40
    const bitcoinTodey = 341.154


    if (moneySelect.value == "dolar") {

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoneyValue / dolarTodey)
    }

    if (moneySelect.value == "euro") {

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoneyValue / euroTdoey)

    }

    if (moneySelect.value == "libra") {

        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoneyValue / libraToday)


    }

    if (moneySelect.value == "bitcoin") {

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoneyValue / bitcoinTodey)

    }

    moneyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoneyValue)

    

}


function changeMoney() {
    const dolarName = document.getElementById("dolar-name")
    const moneyImg = document.querySelector(".img-money")


    if (moneySelect.value == "dolar") {
        dolarName.innerHTML = "Dólar Americano"
        moneyImg.src = "./assets/dolar.png"

    }

    if (moneySelect.value == "euro") {
        dolarName.innerHTML = "Euro"
        moneyImg.src = "./assets/euro.png"

    }

    if (moneySelect.value == "libra") {
        dolarName.innerHTML = "Libra"
        moneyImg.src = "./assets/libra 1.png"


    }

    if (moneySelect.value == "bitcoin") {
        dolarName.innerHTML = "Bitcoin"
        moneyImg.src = "./assets/bitcoin 1.png"

    }

    convertValues() 

}


moneySelect.addEventListener("change", changeMoney)
convertButton.addEventListener("click", convertValues);

