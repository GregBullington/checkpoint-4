import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {
  document.getElementById('weather').innerHTML = `<span><i class="mdi mdi-weather-partly-cloudy"></i></span> <b>${ProxyState.weather.main.temp}</b> <div><b>${ProxyState.weather.name}</b></div>`

}

export class WeatherController {

  constructor() {
    ProxyState.on('weather', _drawWeather)
    this.getWeather()

  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.log(error);
    }
  }

  changeTemp() {
    weatherService.changeTemp()
    _drawWeather()
  }


}