function convert() {
    let fromval = document.getElementById("FromVal");
    let toVal = document.getElementById("ToVal");
    let fro = document.getElementById("FromDrop");
    let tot = document.getElementById("ToDrop");
    let giveVal = fromval.value;
    let fromCurrency = fro.value;
    let toCurrency = tot.value;
    console.log(fromCurrency);
    if(fromCurrency === "INR" && toCurrency ==="AUS"){
        toVal.value = 0.018*giveVal;
    }
    if(fromCurrency === "INR" && toCurrency ==="INR"){
        toVal.value = giveVal;
    }else if(fromCurrency === "INR" && toCurrency ==="USD"){
        toVal.value = 0.013*giveVal;
    }else if(fromCurrency === "USD" && toCurrency ==="AUS"){
        toVal.value = 1.36*giveVal;
    }else if(fromCurrency === "AUS" && toCurrency ==="AUS"){
        toVal.value = giveVal;
    }else if(fromCurrency === "AUS" && toCurrency ==="INR"){
        toVal.value = 54.69*giveVal;
    }else if(fromCurrency === "AUS" && toCurrency ==="USD"){
        toVal.value = 0.74*giveVal;
    }else if(fromCurrency === "USD" && toCurrency ==="INR"){
        toVal.value = 74.22*giveVal;
    }else if(fromCurrency  === "USD" && toCurrency === "USD"){
        toVal.value = giveVal;
    }
}