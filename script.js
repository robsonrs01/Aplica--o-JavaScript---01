const clickButtonConvert = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")

function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    
    
    console.log(currencySelect.value)
    console.log(currencySelect1.value)

    const dolarToday = 5.6
    const euroToday = 5.42
    const libraToday = 6.27
    const bitCoinToday = 139.661
    const real = 1


    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if(currencySelect.value == "libra"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    
    }
    if(currencySelect.value == "bitCoin"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue / bitCoinToday)
    
    }

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




    

}






function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitCoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValue()


}

function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")


    if (currencySelect1.value == "dolar1") {
        currencyName1.innerHTML = "Dólar Americano"
        currencyImage1.src = "./assets/dolar.png"
    }

    if (currencySelect1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
    }
    if (currencySelect1.value == "libra1") {
        currencyName1.innerHTML = "Libra"
        currencyImage1.src = "./assets/libra.png"
    }
    if (currencySelect1.value == "bitCoin1") {
        currencyName1.innerHTML = "BitCoin"
        currencyImage1.src = "./assets/bitcoin.png"
    }
    if (currencySelect1.value == "real1"){
        currencyName1.innerHTML = "Real Brasileiro"
        currencyImage1.src = "./assets/real.png"
    }


}

currencySelect1.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
clickButtonConvert.addEventListener("click", convertValue)