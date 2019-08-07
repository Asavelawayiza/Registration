var inputReg = document.querySelector(".inputReg")
var addBtnElem = document.querySelector(".addButton")
var citiesElem = document.querySelector(".cities")
var registrations = document.querySelector(".registrations");
var showBtnElem = document.querySelector(".showButton")


var instances = regNumber();

addBtnElem.addEventListener("click", function () {
    
    instances.registrationList(inputReg.value);
    var regElem = instances.getRegi();

    var newReg = document.createElement("div");
   newReg.textContent = regElem;
   newReg.classList.add("registrations");
    registrations.appendChild(newReg);

});


 showBtnElem.addEventListener("click", function () {

    var showBtnElem = document.querySelector("input[name='myCity']:checked")
     if (showBtnElem) {
          var showBtn = showBtnElem.value;
     }
         instances.regCheck(showBtn);


         var currentReg = instances.regCheck(showBtn);
 console.log(currentReg)
         var selectedCity = document.createElement("div");
        //   selectedCity.classList.add("showBtnElem");
         
         for (var i = 0; i < currentReg.length; i++) {
        	var selectCity = currentReg[i];
            selectCity.classList.remove("hidden");
         }
         showBtnElem.appendChild(selectedCity);

     
});




