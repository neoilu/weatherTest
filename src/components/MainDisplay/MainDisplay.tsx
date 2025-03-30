import { Component, createSignal, onMount } from "solid-js"
import getData from "../../functions/getData/getData"
import getWeather from "../../functions/getWeather/getWeather"
import getWeatherState from "../../functions/getWeatherState/getWeatherState"

const MainDisplay: Component = () => {
    const [city, setCity] = createSignal("...")
    const [temperature, setTemperature] = createSignal("...")
    const [weatherState, setWeatherState] = createSignal("...")

    onMount(async () => {
        try {
            const data = await getData()
            if (!data || !data.city || !data.latitude || !data.longitude) {
                throw new Error("getData err!")
            }

            setCity(data.city)

            const weather = await getWeather(data.latitude, data.longitude)
            if (!weather) {
                throw new Error("getWeather err!")
            }

            setTemperature(
                `${Math.round(weather.current_weather.temperature)}°`,
            )
            setWeatherState(
                getWeatherState(weather.current_weather.weathercode),
            )
        } catch (e) {
            console.error(e)
        }
    })

    return (
        <div>
            <div>
                <p>MY LOCATION</p>
                <p>{city()}</p>
            </div>
            <div>{temperature()}</div>
            <div>{weatherState()}</div>
        </div>
    )
}

export default MainDisplay
