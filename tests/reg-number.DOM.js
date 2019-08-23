var inputReg = document.querySelector(".inputReg")
var addBtnElem = document.querySelector(".addButton")
var citiesElem = document.querySelector(".cities")
var registrations = document.querySelector(".registrations")
var displayFiltered  = document.querySelector(".fromSelectedTown")
var showBtnElem = document.querySelector(".showButton")
var errorMessage = document.querySelector(".error");

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
    }, 3000 );
    
}

addBtnElem.addEventListener("click", function () {
    if (regNumbers === "" ) {
		errorMessage.innerHTML = "Please write your registration Number"
		clearError();
		return;
    }
    
    var result = instances.registrationList(inputReg.value);
    var regNumbers = instances.getReg();
    //   instances.regCheck(regNumbers);

   if(result) {
       for (var i=0; i<regNumbers.length; i++){
           var selectedReg = regNumbers[i];
       }
    var newReg = document.createElement("li");
    newReg.textContent = selectedReg;
    // newReg.classList.add("registrations");
    registrations.appendChild(newReg);

     localStorage['reg'] = JSON.stringify(instances.getReg())
       
} else {
       errorMessage.innerHTML ="The registration is already added"
		clearError();
		return;
	
   }
});


showBtnElem.addEventListener("click", function () {

    var showBtnElem = document.querySelector(".radio-inline:checked")
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




