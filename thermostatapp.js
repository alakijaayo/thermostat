$( document ).ready(function(){
  var thermostat = new Thermostat()
  $("#temperature").text(thermostat.temperature + " degrees centigrade")
  $("#power-saving-status").text("power saving mode is " + thermostat.display())
  $("#energy-level").text(thermostat.energyUsage())

  $("#temperature-up").click(function() {
    thermostat.up()
    $("#temperature").text(thermostat.temperature + " degrees centigrade")
    $("#energy-level").text(thermostat.energyUsage())
  })

  $("#temperature-down").click(function() {
    thermostat.down()
    $("#temperature").text(thermostat.temperature + " degrees centigrade")
    $("#energy-level").text(thermostat.energyUsage())
  })

  $("#temperature-reset").click(function() {
    thermostat.resetTemperature()
    $("#temperature").text(thermostat.temperature + " degrees centigrade")
    $("#energy-level").text(thermostat.energyUsage())
  })

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSavingModeOn()
    $("#power-saving-status").text("power saving mode is " + thermostat.display())
  })

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSavingModeOff()
    $("#power-saving-status").text("power saving mode is " + thermostat.display())
  })


})
