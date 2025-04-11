import { getTimeIndex, getFeelsLikeReason } from "@/utils"
import { useUnit } from "effector-react"
import { $cityData, $theme, $weatherData } from "@/api"
import { FeelsLikeIcon } from "@/icons"
import styles from "./style.module.css"

export const FeelsLikeCard = () => {
    const theme = useUnit($theme)
    const weatherData = useUnit($weatherData)
    const cityData = useUnit($cityData)

    return (
        weatherData &&
        cityData && (
            <div className={`${styles.feelsLikeCard} ${styles[theme]}`}>
                <div className={styles.cardHeader}>
                    <FeelsLikeIcon fill="#fff" opacity={0.7} height="16px" />
                    <p className={styles.cardTitle}>FEELS LIKE</p>
                </div>
                <p className={styles.feelsLikeTemperature}>{Math.round(weatherData.hourly.apparent_temperature[getTimeIndex(cityData)])}°</p>
                <p className={styles.feelsLikeDescription}>{getFeelsLikeReason(weatherData, cityData)}</p>
            </div>
        )
    )
}
