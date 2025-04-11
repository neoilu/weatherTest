import styles from "./style.module.css"
import { getWeatherState } from "../../../../utils"
import { useUnit } from "effector-react"
import { $cityData, $theme, $weatherData } from "@/api"
import { LocationIcon } from "@/icons"

export const MainCard = () => {
    const theme = useUnit($theme)
    const weatherData = useUnit($weatherData)
    const cityData = useUnit($cityData)

    return (
        cityData && weatherData &&
        <div className={`${styles.weatherCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <div className={styles.locationTitle}>
                    <LocationIcon width="12px" fill="#fff" opacity={0.8} />
                    <p className={styles.cardLocationLabel}>MY LOCATION</p>
                </div>
                <p className={styles.cardCity}>{cityData.city}</p>
            </div>
            <div>
                <p className={styles.currentTemperature}>{Math.round(weatherData.current_weather.temperature)}°</p>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.weatherCondition}>{getWeatherState(weatherData.current_weather.weathercode).name}</p>
                <p className={styles.dailyRange}>
                    High: {Math.round(weatherData.daily.temperature_2m_max[0])}° Low: {Math.round(weatherData.daily.temperature_2m_min[0])}°
                </p>
            </div>
        </div>
    )
}
