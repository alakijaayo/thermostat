describe ("Thermostat", function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe ("Temperature initialization", function() {

    it('starts with a temperature of 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })

    it('has a minimimum temperature of 10 degrees', function() {
      expect(thermostat.minimumTemp).toEqual(10);
    })

  })


  describe ("Temperature change", function() {

    it("increases the temperature", function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    })

    it("lowers the temperature", function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    })
  })

})
