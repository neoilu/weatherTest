import { Component, onMount, createEffect } from "solid-js"
import { useFetchWeather, useTheme, useFetchData } from "@/hooks"
import { MainPage } from "./MainPage"

const App: Component = () => {
    const { dataResponse, fetchData } = useFetchData()
    const { weatherResponse, fetchWeather } = useFetchWeather()
    const { theme, updateTheme } = useTheme()

    onMount(async () => {
        try {
            await fetchData()
            const data = dataResponse()

            if (data) {
                await fetchWeather(data)
            }
        } catch (e) {
            console.error(e)
        }
    })

    createEffect(() => {
        if (weatherResponse()) {
            updateTheme(weatherResponse()!)
        }
    })

    return (
        <>
            {dataResponse() && weatherResponse() ? (
                <div class="height: 100%">
                    <MainPage
                        data={dataResponse()!}
                        weather={weatherResponse()!}
                        theme={theme}
                    />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default App
