import { Component, onMount } from "solid-js"
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

            updateTheme(weatherResponse()!)
        } catch (e) {
            console.error(e)
        }
    })

    return (
        <>
            {dataResponse() && weatherResponse() ? (
                <div>
                    <MainPage
                        data={dataResponse()!}
                        weather={weatherResponse()!}
                        theme={theme()}
                    />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default App
