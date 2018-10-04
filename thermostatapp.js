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

  $('#submit').click(function() {
    var city = $('#city-name').val()
    $.get(get_url(city), function(data){
      $("#result").text("The temperature in " + city + " is " + data.main.temp)
    })
  })

  var api_key = '7c813b9bb506919b819c947817f24c6d'

  var url_beginning = 'https://api.openweathermap.org/data/2.5/weather?q='

  var url_end = '&?id=524901&appid=' + api_key + '&units=metric'


  var get_url = function(city) {
    return url_beginning + city + url_end
  }



})
