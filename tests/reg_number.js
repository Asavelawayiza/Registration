function regNumber() {
    var enteredReg = [];
    var regi;


    function registrationList(reg) {

        reg = reg.toUpperCase();
        regi = reg
        if (!enteredReg.includes(reg)) {
            enteredReg.push(reg)
        }

    }

    function regCheck(loc) {
        var regex = /^[A-Z]{2}\s[0-9]{5}$/gm
        console.log(loc)
        var newReg = regex.test(loc)
        if (newReg === true) {
            enteredReg[regi] === undefined
            enteredReg[regi] = 0;
        }

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