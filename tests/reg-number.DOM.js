var inputReg = document.querySelector(".inputReg")
var addBtnElem = document.querySelector(".addButton")
var citiesElem = document.querySelector(".cities")
var registrations = document.querySelector(".registrations")
var displayFiltered = document.querySelector(".fromSelectedTown")
var showBtnElem = document.querySelector(".showButton")
var errorMessage = document.querySelector(".error");
var clearBtn = document.querySelector(".clearButton")

if (localStorage['reg']) {
    var regStore = JSON.parse(localStorage['reg'])
}
else {
    regStore = []
}
var instances = regNumber(regStore);


function clearError() {
    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 3000);

}

addBtnElem.addEventListener("click", function () {

    if (regNumbers === "") {
        clearError();
        errorMessage.innerHTML = "Please write your registration Number"
        errorMessage.classList.remove("green")
        errorMessage.classList.add("red")

    }

    const plate = inputReg.value.toUpperCase()

    if (!instances.regexValidator(plate)) {
        errorMessage.innerHTML = "invalid registration number"
        errorMessage.classList.add("red")
        return;
    }

    if (!instances.townValidator(plate)) {
        errorMessage.innerHTML = "town does not exist"
        errorMessage.classList.remove("green")
        
        return;
    }

    if (!instances.registrationList(plate)) {
        errorMessage.innerHTML = "registration number already exists"
        errorMessage.classList.remove("black")
    
        return;
    }

    errorMessage.innerHTML = "";

    
    var result = instances.registrationList(inputReg.value);
    var regNumbers = instances.getReg();

    var newReg = document.createElement("li");
    newReg.textContent = inputReg.value.toUpperCase();
    registrations.appendChild(newReg);

    localStorage['reg'] = JSON.stringify(instances.getReg())
   
});


showBtnElem.addEventListener("click", function () {

    var showBtnElem = document.querySelector(".radio-inline:checked")
    registrations.innerHTML = "";
    if (showBtnElem) {
    }

    var currentReg = instances.regCheck(showBtnElem.value);


    for (var i = 0; i < currentReg.length; i++) {
        var selectedCity = currentReg[i];

        var city = document.createElement("li");
        city.textContent = selectedCity;
        registrations.appendChild(city)


    }

});


clearBtn.addEventListener("click", function () {
    instances.clear();
    localStorage.clear();
    registrations.innerHTML = ""
   

})





