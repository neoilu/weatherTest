import { WeatherData } from "../types"
import { createStore, createEffect, createEvent } from "effector"
import { updateThemeFx } from "./updateTheme"

export const $weatherData = createStore<WeatherData | null>(null)

export const fetchWeather = createEvent<{ latitude: string; longitude: string }>()

export const fetchWeatherFx = createEffect(async (params: { latitude: string; longitude: string }): Promise<WeatherData | null> => {
    const { latitude, longitude } = params
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?&latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m,temperature_2m,weathercode,wind_speed_10m,wind_direction_10m,wind_gusts_10m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode`,
        )

        const data = await response.json()

        if (!data) {
            throw new Error("api err")
        }

        return {
            current_weather: {
                temperature: data.current_weather.temperature,
                weathercode: data.current_weather.weathercode,
                is_day: data.current_weather.is_day,
            },

            hourly: {
                humidity: data.hourly.relative_humidity_2m,
                time: data.hourly.time,
                temperature_2m: data.hourly.temperature_2m,
                weathercode: data.hourly.weathercode,
                wind_speed_10m: data.hourly.wind_speed_10m,
                wind_direction_10m: data.hourly.wind_direction_10m,
                gusts_10m: data.hourly.wind_gusts_10m,
                apparent_temperature: data.hourly.apparent_temperature,
            },
            daily: {
                time: data.daily.time,
                temperature_2m_min: data.daily.temperature_2m_min,
                temperature_2m_max: data.daily.temperature_2m_max,
                precipitation_sum: data.daily.precipitation_sum,
                weathercode: data.daily.weathercode,
            },
        } as WeatherData
    } catch (e) {
        console.error(e)
        return null
    }
})

$weatherData.on(fetchWeatherFx.doneData, (_, data) => data)

fetchWeather.watch(params => {
    fetchWeatherFx(params)
})

fetchWeatherFx.doneData.watch((weatherData) => {
    if (weatherData !== null) {
      const weatherCode = weatherData.current_weather.weathercode;
      const isDay = weatherData.current_weather.is_day;
  
      updateThemeFx({
        weatherCode: weatherCode,
        isDay: isDay,
      });
    }
  });
