describe('reg-number test', function () {
    it('Should return CA Registrations if a Cape Town Radio Button is Clicked', function () {
        var instances = regNumber();
        assert.equal(instances.registrationList('CA 123 21'), 'CA 789 62');
    })

    it('Should return CK Registrations if a Malmasbury Radio Button is Clicked', function () {
        var instances = regNumber();
        assert.equal(instances.regCheck('CK 789 62'), 'CK 789 62');
    })

    it('Should return CY Registrations if a Bellville Radio Button is Clicked', function () {
        var instances = regNumber();
        assert.equal(instances.regCheck('CY 223 54'), 'CY 223 54');
    })

    it('Should return All Registrations if a ShowAll Radio Button is Clicked', function () {
        var instances = regNumber();
        assert.equal(instances.regCheck('CA 123 21 , CK 789 62 , CY 223 54'), "CA 123 21 , CK 789 62 , CY 223 54");
    })

    it('Return true if the text box has 2 letters and 6 numbers', function () {
        var instances = regNumber();
        assert.equal(instances.regCheck('CA 123465'), true);
    })

    it('Return Error Message if no Registration is entered', function () {
        var instances = regNumber();
        assert.equal(instances.regCheck(""), 'Please enter a Registration');
    })


});

