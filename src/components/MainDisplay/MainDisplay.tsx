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
                throw new Error("getData err!")
            }

            const weather = await getWeather(data.latitude, data.longitude) 
            setTemperature(`${Math.round(weather.current_weather.temperature)}°`);
        } catch (e) {
            console.error(e)
        }
    })

    return <div>
        <div>
            <p>MY LOCATION</p>
            <p>{city()}</p>
        </div>
        <div>{temperature()}</div>
        <div></div>
    </div>
}

export default MainDisplay
