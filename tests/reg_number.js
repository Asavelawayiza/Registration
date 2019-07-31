function regNumber(regList) {
    var enteredReg = {};
    //var registration =[]

    function registrationList(regNumber) {
        var regi = regNumber
        console.log(regi)
        for (var i = 0; i < regi.length; i++) {
            var n = regi[i]
            if (enteredReg[n] === undefined)
                enteredReg[n] = 0;
        }
    }

    function regCheck(reg) {
        var registration = [];

        if (reg.startsWith('CJ')) {
            registration.push(reg);
        }
        else if (reg.startsWith('CA')) {
            registration.push(reg);
        }
        else if (reg.startsWith('CK')) {
            registration.push(reg);
        }
        return registration;
    }

    function getReg() {
        return enteredReg;
    }

    console.log(enteredReg)
    return {
        regCheck,
        registrationList,
        getReg

    }
}