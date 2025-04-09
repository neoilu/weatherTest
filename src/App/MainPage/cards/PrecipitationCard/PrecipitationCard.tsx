import { CardProps } from "@/types"
import styles from "./style.module.css"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { PrecipitationIcon } from "@/icons"

export const PrecipitationCard = (props: CardProps) => {
    const theme = useUnit($theme)
    return (
        <div className={`${styles.precipitationCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <PrecipitationIcon height="14px" fill="#fff" opacity={0.7} />
                <p className={styles.cardTitle}>PRECIPITATION</p>
            </div>

            <div className={styles.cardContent}>
                <p className={styles.todayPrecipitation}>{Math.round(props.weatherData?.daily.precipitation_sum[0]!)} mm</p>
                <p className={styles.todayLabel}>Today</p>
            </div>
            <p className={styles.tomorrowPrecipitation}>{Math.round(props.weatherData?.daily.precipitation_sum[1]!)} mm expected tomorrow</p>
        </div>
    )
}
