import { CardProps } from "@/types"
import { getTimeIndex, getFeelsLikeReason } from "@/utils"
import styles from "./style.module.css"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { FeelsLikeIcon } from "@/icons"

export const FeelsLikeCard = (props: CardProps) => {
    const theme = useUnit($theme)

    return (
        <div className={`${styles.feelsLikeCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <FeelsLikeIcon fill="#fff" opacity={0.7} height="16px"/>
                <p className={styles.cardTitle}>FEELS LIKE</p>
            </div>
            <p className={styles.feelsLikeTemperature}>{Math.round(props.weatherData.hourly.apparent_temperature[getTimeIndex(props.weatherData, props.cityData)!])}°</p>
            <p className={styles.feelsLikeDescription}>{getFeelsLikeReason(props.weatherData, props.cityData)}</p>
        </div>
    )
}
