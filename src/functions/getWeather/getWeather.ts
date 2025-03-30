import { WeatherDataResponse } from "@types"

async function getWeather(latitude: string, longitude: string): Promise<WeatherDataResponse | null> {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,wind_speed_10m,wind_direction_10m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode`,
        )

        const data = await response.json()


        if (!data) {
            throw new Error("api err")
        }

        return {
            current_weather: {
                temperature: data.current_weather.temperature,
                windspeed: data.current_weather.windspeed,
                winddirection: data.current_weather.winddirection,
                weathercode: data.current_weather.weathercode,
                is_day: data.current_weather.is_day,
            },

            hourly: {
                time: data.hourly.time,
                temperature_2m: data.hourly.temperature_2m,
                weathercode: data.hourly.weathercode,
                wind_speed_10m: data.hourly.wind_speed_10m,
                wind_direction_10m: data.wind_direction_10m,
                apparent_temperature: data.apparent_temperature,
            },
            daily: {
                time: data.daily.time,
                temperature_2m_min: data.daily.temperature_2m_min,
                temperature_2m_max: data.daily.temperature_2m_max,
                precipitation_sum: data.daily.precipitation_sum,
                weathercode: data.daily.weathercode,
            },
        } as WeatherDataResponse
    } catch (e) {
        console.log(e)
        return null
    }
}

export default getWeather
