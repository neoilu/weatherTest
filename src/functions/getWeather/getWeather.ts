async function getWeather(latitude: string, longitude: string) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await response.json()
        console.log(data)
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default getWeather