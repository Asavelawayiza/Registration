describe('reg-number test', function () {
    it('Should Add a Cape Town Registration', function () {
        var instances = regNumber();
        instances.registrationList('CA 789 62')
        assert.deepEqual(instances.getReg(), ['CA 789 62']);
    })
    it('Should Add a Bellville Registration', function () {
        var instances = regNumber();
        instances.registrationList('CY 223 54')
        assert.deepEqual(instances.getReg(), ['CY 223 54']);
    })

    it('Return Error Message if no Registration is entered', function () {
        var instances = regNumber();
         instances.registrationList("");
        assert.equal(instances.getReg(), "");
    })

    it('Return One Registration if a same Registration is Entered', function () {
        var instances = regNumber();
         instances.registrationList('CA 123');
         instances.registrationList('CA 123');

        assert.deepEqual(instances.getReg(), ['CA 123']);
    })


   it('Should return CA Registrations if a Cape Town Radio Button is Clicked', function () {
        var instances = regNumber();
        instances.registrationList('CA 789 62')
        assert.deepEqual(instances.regCheck("CA"), ['CA 789 62']);
    })

    it('Should return CK Registrations if a Malmasbury Radio Button is Clicked', function () {
        var instances = regNumber();
        instances.registrationList('CK 789 62')
        assert.deepEqual(instances.regCheck("CK"), ["CK 789 62"]);
    })


    it('Should return All Registrations if a ShowAll Radio Button is Clicked', function () {
        var instances = regNumber();
        instances.registrationList('CA 123 21')
        instances.registrationList('CK 789 62')
        instances.registrationList('CY 223 54')
        
        assert.deepEqual(instances.regCheck(""), ["CA 123 21","CK 789 62","CY 223 54"]);
    })

    
});

