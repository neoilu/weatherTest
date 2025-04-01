import { WeatherDataResponse } from "@/types"
import { createSignal } from "solid-js"

const useTheme = () => {
    const [theme, setTheme] = createSignal<string>("dayTheme")

    const updateTheme = (weather: WeatherDataResponse) => {
        if (!weather) return

        const weatherCode = weather.current_weather.weathercode ?? 0
        const isRainy = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(
            weatherCode,
        )
        const isDay = weather.current_weather.is_day === 1

        const newTheme = isRainy
            ? "rainTheme"
            : isDay
            ? "dayTheme"
            : "nightTheme"
        setTheme(newTheme)

        document.body.classList.remove("dayTheme", "nightTheme", "rainTheme")
        document.body.classList.add(newTheme)
    }

    return {theme, updateTheme}
}

export default useTheme
