function compute()
{
    //input variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = interest;

//validatees the Principal input box to a number higher than zero
    if(principal == ""){
        alert("PLEASE ENTER NUMBER HIGHER THAN 0")
        document.getElementById("principal").focus();
        return false
    }

    if(principal <= 0){
        alert("PLEASE ENTER NUMBER HIGHER THAN 0")
        document.getElementById("principal").focus();
        return false       
    }

    document.getElementById("result").innerHTML="If you deposit $'<mark>'"+principal+"'</mark>',\<br\>at an interest rate of '<mark>'"+rate+"'</mark>'%\<br\>You will receive an amount of $'<mark>'"+result+"'</mark>',\<br\>in the year '<mark>'"+year+"'</mark>'\<br\>"
}

function updateRate() //input function that reads value of the range slider
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}