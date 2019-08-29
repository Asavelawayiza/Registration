function regNumber() {
    var enteredReg = [];

    function clear() {
        enteredReg = [];
    }


    function registrationList(reg) {
        if (!enteredReg.includes(reg)) {
            enteredReg.push(reg);
            return true;
        }

        return false;

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

        if (plate.startsWith('CA ')) {
            return true
        }
        if (plate.startsWith('CY ')) {
            return true
        }
        if (plate.startsWith('CK ')) {
            return true
        }

        return false;
    }


    function regexValidator(plate) {
        var regex = /^[A-Z]{2}\s[0-9]{3}[\s -][0-9]{3}/

        return regex.test(plate.toUpperCase());
    }

    return {
        regCheck,
        registrationList,
        getReg,
        clear, regexValidator, townValidator


    }
}