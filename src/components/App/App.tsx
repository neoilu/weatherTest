import { type Component, createSignal, createEffect, onMount } from "solid-js"
import { MainDisplay } from "@/components"
import { getData, getWeather } from "@/functions"
import type { MainDataResponse, WeatherDataResponse } from "@/types"

const App: Component = () => {
    const [dataResponse, setDataResponse] = createSignal<MainDataResponse | null>(null)
    const [weatherResponse, setWeatherResponse] = createSignal<WeatherDataResponse | null>(null)
    const [theme, setTheme] = createSignal<string>("dayTheme")

    onMount(async () => {
        try {
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
    
            const weatherCode = weather.current_weather.weathercode ?? 0;
            const isRainy = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode);
            const isDay = weather.current_weather.is_day === 1;
        
            const newTheme = isRainy ? "rainTheme" : isDay ? "dayTheme" : "nightTheme";
            setTheme(newTheme);
            
            document.body.classList.remove("dayTheme", "nightTheme", "rainTheme");
            document.body.classList.add(newTheme);
        } catch (e) {
            console.error(e)
        }
    })

    return (
        <>
            <div>
                {dataResponse() && weatherResponse() ? (
                    <MainDisplay
                        data={dataResponse()!}
                        weather={weatherResponse()!}
                        theme={theme()}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default App