import { CardProps } from "../../../../types"
import styles from "./style.module.css"
import { getWeatherState } from "../../../../utils"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { LocationIcon } from "@/icons"

export const MainCard = (props: CardProps) => {
    const theme = useUnit($theme)
    return (
        <div className={`${styles.weatherCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <div className={styles.locationTitle}>
                    <LocationIcon width="12px" fill="#fff" opacity={0.8} />
                    <p className={styles.cardLocationLabel}>MY LOCATION</p>
                </div>
                <p className={styles.cardCity}>{props.cityData.city}</p>
            </div>
            <div>
                <p className={styles.currentTemperature}>{Math.round(props.weatherData.current_weather.temperature)}°</p>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.weatherCondition}>{getWeatherState(props.weatherData.current_weather.weathercode).name}</p>
                <p className={styles.dailyRange}>
                    High: {Math.round(props.weatherData.daily.temperature_2m_max[0])}° Low: {Math.round(props.weatherData.daily.temperature_2m_min[0])}°
                </p>
            </div>
        </div>
    )
}
