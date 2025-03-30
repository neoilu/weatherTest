import type { MainDataResponse } from "@types"

async function getData() {
    try {
        const response = await fetch("https://ipwhois.app/json/")
        const data = await response.json()
        return {
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
        } as MainDataResponse
    } catch (e) {
        console.error(e)
        return null
    }
}

export default getData
