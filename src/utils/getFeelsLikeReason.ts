import { MainDataResponse, WeatherDataResponse } from "@/types"
import getTimeIndex from "./getTimeIndex"

const getFeelsLikeReason = (weather: WeatherDataResponse, data: MainDataResponse) => {
    const timeIndex = getTimeIndex(weather, data)!
    const temperature = weather.current_weather.temperature
    const apparent_temperature = weather.hourly.apparent_temperature[timeIndex]

    let difference = apparent_temperature - temperature

    if (difference < -1) {
        return `Wind is making it feel cooler`
    } else if (difference > 1) {
        return `Humidity is making it feel warmer`
    } else {
        return `Similar to the actual temperature`
    }
}

export default getFeelsLikeReason
