// For creditNumber
let cleave = new Cleave('#number', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
    }
});


document.getElementById("confirm").onclick = function(){

    // Variables
    let cName = document.querySelector("#name");
    let cNumber = document.querySelector("#number");
    let MM = document.querySelector("#mm");
    let YY = document.querySelector("#yy");
    let CVC = document.querySelector("#cvc");
    // Values
    let cardholderName = document.getElementById("name").value;
    let cardnumber = document.getElementById("number").value;
    let mm = document.getElementById('mm').value;
    let yy = document.getElementById('yy').value;
    let cvc = document.getElementById('cvc').value;
    
    
    // cardholdername
    if (cardholderName === ""){
        cName.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#nameerror").style.display = "block";
        document.querySelector("#nameerror").innerHTML = "can't be blank";
        return;
    }
    if (cardholderName !== ""){
        cName.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector("#nameerror").style.display = "none";
    }
    document.getElementById("cardname").innerHTML = cardholderName;


    // cardnumber
    if (cardnumber === ""){
        console.log("can't be blank");
        cNumber.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#numbererror").style.display = "block";
        document.querySelector("#numbererror").innerHTML = "can't be blank";
        return;
    }
    if (cardnumber !== ""){
        cNumber.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector("#numbererror").style.display = "none";
    }
    document.getElementById("cardnumber").innerHTML = cardnumber;


    // MM
    if (mm === ""){
        console.log("can't be blank");
        MM.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#dateerror").style.display = "block";
        document.querySelector("#dateerror").innerHTML = "can't be blank";
        return;
    }
    if (mm !== ""){
        MM.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector("#dateerror").style.display = "none";
    }
    if (mm.length !== 2){
        MM.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#dateerror").style.display = "block";
        document.querySelector("#dateerror").innerHTML = "mm must be 2 digits";
        return
    }    
    for( i = 0; i < mm.length; i++){
        let ascii_code =  mm.charCodeAt(i);
        if (ascii_code < 48 || ascii_code > 57){
            MM.style.borderColor = "hsl(0, 100%, 66%)";
            document.querySelector("#dateerror").style.display = "block";
            document.querySelector("#dateerror").innerHTML = "mm must be digits";
            return;
        }
    }    
    let number = parseInt(mm);
    if (number < 1 || number > 12){
        MM.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#dateerror").style.display = "block";
        document.querySelector("#dateerror").innerHTML = "we only have 12 months";
        return;
    }
    document.getElementById('MM').innerHTML = mm;


    // YY
    if (yy === ""){
        console.log("can't be blank");
        YY.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#dateerror").style.display = "block";
        document.querySelector("#dateerror").innerHTML = "can't be blank";
        return;
    }    
    if (yy !== ""){
        YY.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector("#dateerror").style.display = "none";
    }    
    if (yy.length !== 2){
        YY.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#dateerror").style.display = "block";
        document.querySelector("#dateerror").innerHTML = "yy must be 2 digits";
        return
    }    
    for( i = 0; i < yy.length; i++){
        let ascii_code =  yy.charCodeAt(i);
        if (ascii_code < 48 || ascii_code > 57){
            YY.style.borderColor = "hsl(0, 100%, 66%)";
            document.querySelector("#dateerror").style.display = "block";
            document.querySelector("#dateerror").innerHTML = "yy must be digits";
            return;
        }
    }
    document.getElementById('YY').innerHTML = yy;


    // CVC
    if (cvc === ""){
        console.log("can't be blank");
        CVC.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#cvcerror").style.display = "block";
        document.querySelector("#cvcerror").innerHTML = "can't be blank";
        return;
    }    
    if (cvc !== ""){
        CVC.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector("#cvcerror").style.display = "none";
    }
    if (cvc.length !== 3){
        CVC.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector("#cvcerror").style.display = "block";
        document.querySelector("#cvcerror").innerHTML = "cvc must be 3 digits";
        return
    }        
    for( i = 0; i < cvc.length; i++){
        let ascii_code =  cvc.charCodeAt(i);
        if (ascii_code < 48 || ascii_code > 57){
            CVC.style.borderColor = "hsl(0, 100%, 66%)";
            document.querySelector("#cvcerror").style.display = "block";
            document.querySelector("#cvcerror").innerHTML = "cvc must be digits";
            return;
        }
    }
    document.getElementById('CVC').innerHTML = cvc;


    // Gonna work once none of above return.
    document.querySelector(".cardholder").style.display = "none";
    document.querySelector(".cardnumber").style.display = "none";
    document.querySelector(".date-cvc").style.display = "none";
    document.querySelector(".success").style.display = "inline-block";

}