import { Component, createSignal, onMount } from "solid-js"
import getData from "../../functions/getData/getData"
import getWeather from "../../functions/getWeather/getWeather"

const MainDisplay: Component = () => {
    const [city, setCity] = createSignal("...")
    const [temperature, setTemperature] = createSignal("...")

    onMount(async () => {
        try {
            const data = await getData() 
            setCity(data.city)

            if (!data || !data.city || !data.latitude || !data.longitude) {
                throw new Error("Некорректные данные от getData()");
            }

            const weather = await getWeather(data.latitude, data.longitude) 
            setTemperature(weather.current_weather.temperature)
        } catch (e) {
            console.error(e)
        }
    })

    return <div>{city()} {temperature()}</div>
}

export default MainDisplay
