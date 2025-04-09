import { CardProps } from "@/types"
import { Compass } from "./Compass/Compass"
import styles from "./style.module.css"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { getTimeIndex } from "@/utils"
import { WindIcon } from "@/icons/WindIcon"

export const WindCard = (props: CardProps) => {
    const theme = useUnit($theme)
    const timeIndex = getTimeIndex(props.weatherData, props.cityData)
    if (timeIndex === null) {
        return <p>no data</p>
    }

    return (
        <div className={`${styles.windCard} ${styles[theme]}`}>
            <div className={styles.header}>
                <WindIcon height="14px" fill="#fff" opacity={0.8} />
                <p className={styles.title}>WIND</p>
            </div>

            <div className={styles.content}>
                <div className={styles.windInfo}>
                    <div className={styles.windItem}>
                        <p className={styles.windLabel}>Wind</p>
                        <p className={styles.windValue}>{Math.round(props.weatherData.hourly.wind_speed_10m[timeIndex])} km/h</p>
                    </div>
                    <span className={styles.topLine}></span>
                    <div className={styles.windItem}>
                        <p className={styles.windLabel}>Gusts</p>
                        <p className={styles.windValue}>{Math.round(props.weatherData.hourly.gusts_10m[timeIndex])} km/h</p>
                    </div>
                    <span className={styles.topLine}></span>
                    <div className={styles.windItem}>
                        <p className={styles.windLabel}>Direction</p>
                        <p className={styles.windValue}>{Math.round(props.weatherData.hourly.wind_direction_10m[timeIndex])}°</p>
                    </div>
                </div>

                <div className={styles.compassWrapper}>
                    <Compass direction={props.weatherData.hourly.wind_direction_10m[timeIndex] ?? 0} />
                </div>
            </div>
        </div>
    )
}
