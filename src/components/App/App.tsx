import { type Component, createSignal, createEffect, onMount } from "solid-js"
import { MainDisplay } from "@/components"
import { getData, getWeather } from "@/functions"
import type { MainDataResponse, WeatherDataResponse } from "@/types"

const App: Component = () => {
    const [dataResponse, setDataResponse] = createSignal<MainDataResponse | null>(null)
    const [weatherResponse, setWeatherResponse] = createSignal<WeatherDataResponse | null>(null)

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

    createEffect(() => {
        if (weatherResponse()) {
            const weatherCode = weatherResponse()?.current_weather.weathercode ?? 0;
            const isRainy = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode);
            const isDay = weatherResponse()?.current_weather.is_day === 1;
    
            document.body.classList.remove("day-theme", "night-theme", "rain-theme");
    
            if (isRainy) {
                document.body.classList.add("rainTheme");
            } else if (isDay) {
                document.body.classList.add("dayTheme");
            } else {
                document.body.classList.add("nightTheme");
            }
        }
    });
    

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
