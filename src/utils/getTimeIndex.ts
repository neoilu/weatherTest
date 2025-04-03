import { WeatherDataResponse, MainDataResponse } from "@/types"

function getTimeIndex(
    weather: WeatherDataResponse,
    data: MainDataResponse,
): number | null {
    if (!weather?.hourly?.time || !data?.timezone) {
        return null
    }

    const localNow = new Date(new Date().toLocaleString("en-US", { timeZone: data.timezone }))
    const localNowHours = localNow.getHours()

    return localNowHours
}

export default getTimeIndex
