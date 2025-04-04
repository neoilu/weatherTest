import { Component, onMount, createEffect } from "solid-js"
import { useFetchWeather, useTheme, useFetchData } from "@/hooks"
import { Router, Route } from "@solidjs/router"
import { MainPage, InfoPage } from "./"
import { Footer } from "@/components"

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
                <>
                    <Router>
                        <Route
                            path="/"
                            component={() => (
                                <MainPage
                                    data={dataResponse()!}
                                    weather={weatherResponse()!}
                                    theme={theme}
                                />
                            )}
                        />
                        <Route
                            path="/info"
                            component={() => (
                                <InfoPage
                                    data={dataResponse()!}
                                    weather={weatherResponse()!}
                                    theme={theme}
                                />
                            )}
                        />
                    </Router>
                    <Footer
                        data={dataResponse()!}
                        weather={weatherResponse()!}
                        theme={theme}
                    />
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default App
