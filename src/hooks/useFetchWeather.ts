import { createSignal, resetErrorBoundaries } from "solid-js"
import { WeatherDataResponse, MainDataResponse } from "@/types"
import { getWeather } from "@/api"

const useFetchWeather = () => {
    const [weatherResponse, setWeatherResponse] =
        createSignal<WeatherDataResponse | null>(null)

    const fetchWeather = async (data: MainDataResponse) => {
        try {
            const weather = await getWeather(data.latitude, data.longitude)
            if (!weather) {
                throw new Error("getWeather err!")
            }
            setWeatherResponse(weather)
        } catch (e) {
            console.error(e)
        }
    }

    return { weatherResponse, fetchWeather }
}

export default useFetchWeather