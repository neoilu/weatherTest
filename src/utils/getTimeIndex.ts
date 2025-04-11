import { CityData } from "../types"

function getTimeIndex(data: CityData): number  {
    const now = new Date()
    const localHour = new Date(now.toLocaleString("en-US", { timeZone: data.timezone })).getHours()

    return localHour
}

export default getTimeIndex
