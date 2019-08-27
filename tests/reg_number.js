function regNumber() {
    `     `
    var enteredReg = [];
    var regex = /^[A-Z]{2}\s[0-9]{3}\s[0-9]{2}/

    function clear() {
        enteredReg = [];
    }


    function registrationList(reg) {
        if(!enteredReg.includes(reg)) {
             enteredReg.push(reg);
             return true;
        }

        return false;
        // var regi = reg.toUpperCase().trim()
        // // console.log('regi', regi);

        // var test = regex.test(regi)
        // // console.log('test regex', test);

        // if (enteredReg.includes(regi)) {
        //     return 'registration number already exists'
        // }
        // //   console.log("enteredReg",enteredReg)
        // if (regi.startsWith("CA ") || regi.startsWith("CK ") || regi.startsWith("CY ")) {
        //     if (!test) {
        //         return "Invalid registration"
        //     } else {
        //         enteredReg.push(regi)
        //     }
        // }
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

    function townValidator(plate) {
        plate = plate.toUpperCase();

        if(plate.startsWith('CA ')) {
            return true
        }
        if(plate.startsWith('CY ')) {
            return true
        }
        if(plate.startsWith('CK ')) {
            return true
        }

        return false;
    }


    function regexValidator(plate) {
        var regex = /^[A-Z]{2}\s[0-9]{3}\s[0-9]{2}/
       return regex.test(plate.toUpperCase());
    }

    return {
        regCheck,
        registrationList,
        getReg,
        clear, regexValidator, townValidator


    }
}