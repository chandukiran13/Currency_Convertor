let fromval = document.getElementById("FromVal");
let toVal = document.getElementById("ToVal");
let fro = document.getElementById("FromDrop");
let tot = document.getElementById("ToDrop");
let dropdownFrom = document.getElementById("FromDrop");
let dropdownTo = document.getElementById("ToDrop");
let api = "https://api.exchangerate-api.com/v4/latest/USD";
const currencies = new Set(["USD","EUR","JPY","GBP","AUD","CAD","CHF","CNY","PKR","USD","SAR","AED","INR","EUR","RUB","GBP","CNY","JPY","CAD","AUD","SDG","IDR","SGD","ZAR","KWD","TRY","OMR","HKD","AFN","MYR","VND","JMD","IRR","NZD","BND","QAR","CHF",'MXN']);
for (const k of currencies.keys()){
    dropdownFrom.innerHTML+= `<option value="${k}">${k}</option>`;
    dropdownTo.innerHTML+= `<option value="${k}">${k}</option>`
}
function fetchValue(){
    fetch(api)
            .then(function (respose) {
                let data = respose.json();
                return data;
            })
            .then(function (data) {
                localStorage.setItem("currencyValue",JSON.stringify(data["rates"]));
                console.log("I'm in fetching")
                convert();
            })

}
function convert(){
    let giveVal = fromval.value;
    let fromCurrency = fro.value;
    let toCurrency = tot.value;
    if(localStorage.getItem("currencyValue")===null){
        fetchValue();
    }
    else{
        console.log("I'm here");
        var conversion = localStorage.getItem("currencyValue");
        let conversions = JSON.parse(conversion);
        console.log(conversions)
        let UsCurrency = giveVal/conversions[fromCurrency];
        toVal.value = UsCurrency*conversions[toCurrency];   
    }

}