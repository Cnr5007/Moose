function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["sampleAud"].elements.length; 
        loopCounter++) {
        if (document.forms["sampleAud"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["sampleAud"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function resetForm() {
    clearErrors();
    document.forms["sampleAud"]["num1"].value = "";
    document.forms["sampleAud"]["num2"].value = "";
    document.forms["sampleAud"]["num3"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["sampleAud"]["num1"].focus();
}
function validateItems() {
    clearErrors();
    num1 = document.forms["sampleAud"]["num1"].value;
    num2 = document.forms["sampleAud"]["num2"].value;
    num3 = document.forms["sampleAud"]["num3"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["sampleAud"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["sampleAud"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["sampleAud"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["sampleAud"]["num2"].focus();
       return false;
   }
    if (num3 == "" || isNaN(num3)) {
       alert("Step must be filled in with a number.");
       document.forms["sampleAud"]["num3"]
          .parentElement.className = "form-group has-error"
       document.forms["sampleAud"]["num3"].focus();
       return false;
   }
    if (num3 < 0) {
        alert("Step must be a positive number.");
        document.forms["sampleAud"]["num3"];
        return false;
    }
    if ((Number(num2)) < (Number(num1))) {
        alert("Ending number must be greater than or equal to Starting Number.");
        document.forms["sampleAud"]["num2"];
        return false;
    }
    getResult();
   return false;
}

function getResult() {
    var num = new Array();
    for (var i = Number(num1); i <= Number(num2); i+=Number(num3))
        if ((i % 2) == 0){
            num.push(i);
            // num[i] = num[i] + ("<br/>");
    }
    document.getElementById("start").innerHTML = num1;
    document.getElementById("end").innerHTML = num2;
    document.getElementById("step").innerHTML = num3;
    document.getElementById("numArray").innerHTML = num;
    document.getElementById("results").style.display = "block";
    return false;
}
