import { CityData, WeatherData } from "@/types"
import { getTimeIndex } from "."

const getFeelsLikeReason = (
  cityData: CityData,
  weatherData: WeatherData
): string => {
  if (!cityData || !weatherData) return ""

  const timeIndex = getTimeIndex(cityData)
  const temperature = weatherData.current_weather.temperature
  const apparentTemperature = weatherData.hourly.apparent_temperature[timeIndex]

  const difference = apparentTemperature - temperature

  if (difference < -1) {
    return "Wind is making it feel cooler"
  } else if (difference > 1) {
    return "Humidity is making it feel warmer"
  } else {
    return "Similar to the actual temperature"
  }
}

export default getFeelsLikeReason