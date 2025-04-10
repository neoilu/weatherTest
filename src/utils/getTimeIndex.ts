import { CityData, WeatherData } from "../types"

function getTimeIndex(weather: WeatherData, data: CityData): number | null {
    if (!weather.hourly?.time || !data.timezone) return null

    const now = new Date()
    const localHour = new Date(now.toLocaleString("en-US", { timeZone: data.timezone })).getHours()

    return localHour
}

export default getTimeIndex
