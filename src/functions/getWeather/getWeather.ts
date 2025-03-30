import { weatherDataResponse } from "types"

async function getWeather(latitude: string, longitude: string): Promise<weatherDataResponse | null> {
    try {
        const currenResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
        )
        const hourlyResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,wind_speed_10m,wind_direction_10m,apparent_temperature`,
        )
        const dailyResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode
`,
        )
        const currentData = await currenResponse.json()
        const hourlyData = await hourlyResponse.json()
        const dailyData = await dailyResponse.json()

        if (!currentData && !hourlyData && !dailyData) {
            throw new Error("fjgbhvhbdjc")
        }

        return {
            current_weather: {
                temperature: currentData.current_weather.temperature,
                windspeed: currentData.current_weather.windspeed,
                winddirection: currentData.current_weather.winddirection,
                weathercode: currentData.current_weather.weathercode,
            },

            hourly: {
                time: hourlyData.hourly.time,
                temperature_2m: hourlyData.hourly.temperature_2m,
                weathercode: hourlyData.hourly.weathercode,
                wind_speed_10m: hourlyData.hourly.wind_speed_10m,
                wind_direction_10m: hourlyData.wind_direction_10m,
                apparent_temperature: hourlyData.apparent_temperature,
            },
            daily: {
                time: dailyData.daily.time,
                temperature_2m_min: dailyData.daily.temperature_2m_min,
                temperature_2m_max: dailyData.daily.temperature_2m_max,
                precipitation_sum: dailyData.daily.precipitation_sum,
                weathercode: dailyData.daily.weathercode,
            },
        } as weatherDataResponse
    } catch (e) {
        console.log(e)
        return null
    }
}

export default getWeather
