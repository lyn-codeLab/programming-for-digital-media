let sourceCurrency;
let targetCurrency;
let tradeValue;
let message;

function convert (sourceCurrency, targetCurrency, tradeValue){
    if (sourceCurrency === "EUR" && targetCurrency === "GBP"){
        targetCurrency = tradeValue * 0.87;
        message = tradeValue + " EUR converted in GBP is " + targetCurrency;
    } else if (sourceCurrency === "GBP" && targetCurrency === "EUR"){
        targetCurrency = tradeValue / 0.87; 
        message = tradeValue + " GBP converted in EUR is " + targetCurrency;
    } else {
        message = "source or target currency not recognised";
    }
}

convert("EUR", "GBP", 10);
//convert("GBP", "EUR", 20);
//convert("CZK", "EUR", 30);
console.log(message);



