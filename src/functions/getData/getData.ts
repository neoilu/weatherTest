import type { mainDataResponse } from "types"

async function getData() {
    try {
        let response = await fetch("https://ipwhois.app/json/")
        let data = await response.json()
        return {
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
        } as mainDataResponse
    } catch (e) {
        console.error(e)
        return null
    }
}

export default getData
