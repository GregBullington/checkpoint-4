import { sandBox } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"


class WeatherService {
  async getWeather() {
    const res = await sandBox.get('weather')
    ProxyState.weather = res.data
    const temp =
      (ProxyState.weather.main.temp - 273.14) * 1.8 + 32
    ProxyState.weather.main.temp = Math.floor(temp).toString() + "°F"
    ProxyState.weather = ProxyState.weather
  }

  changeTemp() {
    if (ProxyState.weather.main.temp.includes("°F")) {
      let num = ProxyState.weather.main.temp
      let temp = parseInt(num, 10)
      let newTemp = (temp - 32) * 5 / 9
      ProxyState.weather.main.temp = Math.floor(newTemp).toString() + "°C"
      ProxyState.weather = ProxyState.weather
    }
    else if (ProxyState.weather.main.temp.includes("°C")) {
      let num = ProxyState.weather.main.temp
      let temp = parseInt(num, 10)
      let newTemp = temp * 9 / 5 + 32
      ProxyState.weather.main.temp = Math.floor(newTemp).toString() + "°F"
      ProxyState.weather = ProxyState.weather
    }
  }

}


export const weatherService = new WeatherService()