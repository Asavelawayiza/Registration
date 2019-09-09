
var tempInputReg = document.querySelector(".tempInputReg")
var tempAddButton = document.querySelector(".tempAddButton")
var tempCitiesElem = document.querySelector(".tempCities")
var tempRegistrations = document.querySelector(".tempRegistrations")
var tempShowBtnElem = document.querySelector(".tempShowButton")
var tempErrorMessage = document.querySelector(".tempError");
var tempClearBtn = document.querySelector(".tempClearButton")

var getHandlerbar = document.querySelector(".template").innerHTML;
var compileHandlers = Handlebars.compile(getHandlerbar);
var displayPlates = document.querySelector(".tempRegistrations")


var tempRegStore = [];
if (localStorage['reg']) {
   var tempRegStore = JSON.parse(localStorage['reg'])
}

var tempInstances = regNumber(tempRegStore);

window.addEventListener('DOMContentLoaded', (event) => {
    
    var storage = compileHandlers({getTemplate: tempRegStore});
    displayPlates.innerHTML = storage;
});


var tempCurrentReg = tempInstances.getReg()


function clearError() {
    setTimeout(function () {
        tempErrorMessage.innerHTML = "";
    }, 3000);

}

tempAddButton.addEventListener("click", function () {

    if (regNumbers === "") {
        clearError();
        tempErrorMessage.innerHTML = "Please write your registration Number"
        tempErrorMessage.classList.remove("green")
        tempErrorMessage.classList.add("red")

    }

    const plate = tempInputReg.value.toUpperCase()

    if (!tempInstances.regexValidator(plate)) {
        tempErrorMessage.innerHTML = "invalid registration number"
        tempErrorMessage.classList.add("red")
        return;
    }

    if (!tempInstances.townValidator(plate)) {
        tempErrorMessage.innerHTML = "town does not exist"
        tempErrorMessage.classList.remove("green")
        
        return;
    }

    if (!tempInstances.registrationList(plate)) {
        tempErrorMessage.innerHTML = "registration number already exists"
        tempErrorMessage.classList.remove("black")
    
        return;
    }

    tempErrorMessage.innerHTML = "";

    
   var result = tempInstances.getReg(tempInputReg.value);
    
    var regNumbers = tempInstances.getReg();

    
    localStorage['reg'] = JSON.stringify(tempInstances.getReg())

    
   
});


tempShowBtnElem.addEventListener("click", function () {

    var tempShowBtnElem = document.querySelector(".myCity:checked")
    tempRegistrations.innerHTML = "";
    if (tempShowBtnElem) {
        tempInstances.regCheck(tempShowBtnElem.value);
    }

   var showValue = compileHandlers({getTemplate: tempRegStore});
    displayPlates.innerHTML = showValue;    
    
});


tempClearBtn.addEventListener("click", function () {
    tempInstances.clear();
    localStorage.clear();
    tempRegistrations.innerHTML = "";


})









