import { createSignal } from "solid-js"
import type { WeatherDataResponse, MainDataResponse } from "@/types"
import { getWeather } from "@/api"

const useFetchWeather = () => {
    const [weatherResponse, setWeatherResponse] =
        createSignal<WeatherDataResponse | null>(null)
    const [error, setError] = createSignal<string | null>(null)

    const fetchWeather = async (data: MainDataResponse) => {
        try {
            const weather = await getWeather(
                data.latitude,
                data.longitude,
                data.timezone,
            )
            if (!weather) {
                throw new Error("getWeather err!")
            }
            setWeatherResponse(() => weather)
            setError(null)
        } catch (e) {
            console.error(e)
        }
    }

    return { weatherResponse, fetchWeather, error }
}

export default useFetchWeather
