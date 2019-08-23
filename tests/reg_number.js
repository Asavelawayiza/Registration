function regNumber() {
    var enteredReg = [];


    function registrationList(reg) {

        var regi = reg.toUpperCase();
        if (!enteredReg.includes(regi)) {
            enteredReg.push(regi)

            return true
        } 
        return false

    }

    function regCheck(loc) {

        var registration = [];
        for (var i = 0; i < enteredReg.length; i++) {
            if (enteredReg[i].startsWith(loc)) {
                registration.push(enteredReg[i]);
            }

        }

        return registration;

    }

    function getReg() {
        return enteredReg;
    }

    // function getRegi() {
    //     return regi
    // }

    return {
        regCheck,
        registrationList,
        getReg,
        // getRegi


    }
}