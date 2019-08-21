var inputReg = document.querySelector(".inputReg")
var addBtnElem = document.querySelector(".addButton")
var citiesElem = document.querySelector(".cities")
var registrations = document.querySelector(".registrations")
var displayFiltered  = document.querySelector(".fromSelectedTown")
var showBtnElem = document.querySelector(".showButton")
var errorMessage = document.querySelector(".error");

if (localStorage['name']) {
    var nameStore = JSON.parse(localStorage['name'])
}
else {
    nameStore = {}
}


var instances = regNumber(nameStore);


function clearError() {
	setTimeout(function () {
		errorMessage.innerHTML = "";
    }, 3000 );
    
}

addBtnElem.addEventListener("click", function () {


    instances.registrationList(inputReg.value);
    var regElem = instances.getRegi();
      instances.regCheck(regElem);

    if (regElem === "" ) {
		errorMessage.innerHTML = "Please write your registration Number"
		clearError();
		return;
	}

 
    var newReg = document.createElement("li");
    newReg.textContent = regElem;
    // newReg.classList.add("registrations");
    registrations.appendChild(newReg);


   

});


showBtnElem.addEventListener("click", function () {

    var showBtnElem = document.querySelector("input[name='myCity']:checked")
    registrations.innerHTML = "";
    if (showBtnElem) {
   
    }

    var currentReg =  instances.regCheck(showBtnElem.value);
   

    for (var i = 0; i < currentReg.length; i++) {
        var selectedCity = currentReg[i];

        var city = document.createElement("li");
        city.textContent = selectedCity;
        registrations.appendChild(city)

    }
  

});




