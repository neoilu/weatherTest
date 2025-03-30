import { type Component, createSignal, onMount } from "solid-js"
import MainDisplay from "../MainDisplay"
import getData from "../../functions/getData/getData"
import type { mainDataResponse, weatherDataResponse } from "types"
import getWeather from "../../functions/getWeather/getWeather"

const App: Component = () => {
    const [dataResponse, setDataResponse] = createSignal<mainDataResponse | null>(null)
    const [weatherResponse, setWeatherResponse] = createSignal<weatherDataResponse | null>(null)

    onMount(async () => {
        const data = await getData()
        if (!data) {
            throw new Error("getData err!")
        }
        setDataResponse(data)

        const weather = await getWeather(data.latitude, data.longitude)
        if (!weather) {
            throw new Error("getWeather err!")
        }
        setWeatherResponse(weather)

    })

    return (
        <>
            <div>
                {dataResponse() && weatherResponse() ? (
                    <MainDisplay
                        data={dataResponse()!}
                        weather={weatherResponse()!}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default App
