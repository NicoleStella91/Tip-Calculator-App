//CALCULATOR

function percentage(val) {
    let billValue = document.getElementById("bill").value;
    let peopleValue = document.getElementById("people").value;
    if(peopleValue==0 || peopleValue=='') {
        document.getElementById("zero").innerHTML = "Can't be zero";
        document.getElementById("people").style.border = "2px solid red";
    } else {
        let percentage = parseFloat((billValue / 100)*val).toFixed(2);
        document.getElementById("tipAmount").innerHTML = "$" + percentage;
        let newBill = (parseFloat(billValue) + parseFloat(percentage)).toFixed(2);
        let total = (parseFloat(newBill) / parseFloat(peopleValue)).toFixed(2);
        document.getElementById("total").innerHTML = "$" + total; 
    }
}

function customPercentage() {
    let custom = document.getElementById("custom").value;
    let billValue = document.getElementById("bill").value;
    let peopleValue = document.getElementById("people").value;
    if(peopleValue==0 || peopleValue=='') {
        document.getElementById("people").style.border = "2px solid red";
        document.getElementById("zero").innerHTML = "Can't be zero";
    } else {
        let customPerc = parseFloat((billValue / 100)*custom).toFixed(2);
        document.getElementById("tipAmount").innerHTML = "$" + customPerc;
        let newCustomBill = (parseFloat(billValue) + parseFloat(customPerc)).toFixed(2);
        let customTotal = (parseFloat(newCustomBill) / parseFloat(peopleValue)).toFixed(2);
        document.getElementById("total").innerHTML = "$" + customTotal;
    }
}

//RESET BUTTON

function reset() {
    location.reload();
}