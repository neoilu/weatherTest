import { $weatherData } from "@/api"
import styles from "./style.module.css"
import { getWeatherState } from "@/utils"
import { useUnit } from "effector-react"

interface DayCardProps {
    index: number
    isToday?: boolean
}

export const DayCard = (props: DayCardProps) => {
    const weatherData = useUnit($weatherData)

    const weatherState = getWeatherState(weatherData!.daily.weathercode[props.index])

    const day = new Date(weatherData!.daily.time[props.index])
    const dayName = day.toLocaleDateString("en-US", { weekday: "short" })

    return (
        weatherData && (
            <>
                <span className={styles.topLine}></span>
                <div className={styles.dayCard}>
                    <p className={styles.dayLabel}>{props.isToday ? "Today" : dayName}</p>
                    <img className={styles.weatherIcon} src={weatherState.icon} alt={weatherState.name} />
                    <div className={styles.temperatureRange}>
                        <p className={styles.temperature}>{Math.round(weatherData.daily.temperature_2m_min[props.index])}°</p>
                        <span className={styles.separator}></span>
                        <p className={styles.temperature}>{Math.round(weatherData.daily.temperature_2m_max[props.index])}°</p>
                    </div>
                </div>
            </>
        )
    )
}
