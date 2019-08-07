function regNumber() {
    var enteredReg = [];
    var regi;


    function registrationList(regNumber) {
        regi = regNumber
        if (!enteredReg.includes(regNumber)) {
            enteredReg.push(regNumber)
        }

    }

    function regCheck(loc) {

        var registration = [];
        for (var i = 0; i < enteredReg.length; i++) {
            if (enteredReg[i].startsWith(loc)) {
                registration.push(loc);
            }
        }

        return registration;
    }

    function getReg() {
        return enteredReg;
    }

    function getRegi() {
        return regi
    }

    return {
        regCheck,
        registrationList,
        getReg,
        getRegi


    }
}