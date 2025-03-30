async function getWeather(latitude: string, longitude: string, timezone: string) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=${timezone}`,
        )
        const data = await response.json()
        console.log(data)
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default getWeather
