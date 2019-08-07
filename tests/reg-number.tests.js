describe('reg-number test' , function(){
    it('if location starts with CA should return Cape Town registration' , function(){
        var instances = regNumber();
        assert.deepEqual(instances.regCheck(enteredReg), 'CA 123' );
       })
    
    it('if reg Number starts with CK should return Malmesbury registration' , function(){
        var instances = regNumber();
        assert.deepEqual(instances.regCheck("CK 246", "CK"), ['CK 246'] );
       })

     
    it('if reg Number starts with CJ should return Bellvile registration' , function(){
        var instances = regNumber();
        assert.deepEqual(instances.regCheck("CJ 369", "CJ"), ['CJ 369'] );
        })

        it('should return', function(){
            var instances = regNumber();
            instances.registrationList(["CK 123"])
            instances.registrationList(["CA 123"])
            instances.registrationList(["CJ 123"])
            assert.deepEqual(instances.getReg(),['CK 123', 'CJ 123', 'CA 123']);
        })
    });

    