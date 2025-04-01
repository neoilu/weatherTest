import { type Component, onMount } from "solid-js"
import { useFetchWeather, useTheme, useFetchData } from "@/hooks"

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
            {theme()}
        </>
    )
}

export default App
