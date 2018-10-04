$( document ).ready(function(){
  var thermostat = new Thermostat()
  $("#temperature").text(thermostat.temperature + " degrees centigrade")

  $("#temperature-up").click(function() {
    thermostat.up()
    $("#temperature").text(thermostat.temperature + " degrees centigrade")
  })

  $("#temperature-down").click(function() {
    thermostat.down()
    $("#temperature").text(thermostat.temperature + " degrees centigrade")
  })

  $("#temperature-reset").click(function() {
    thermostat.resetTemperature()
    $("#temperature").text(thermostat.temperature + " degrees centigrade")
  })

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSavingModeOn()
    $("#power-saving-status").text("on")
  })

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSavingModeOff()
    $("#power-saving-status").text("off")
  })

})
