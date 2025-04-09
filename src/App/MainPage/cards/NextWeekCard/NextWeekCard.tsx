import { CardProps } from "@/types"
import styles from "./style.module.css"
import { DayCard } from "@/components/DayCard/DayCard"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { NextWeekIcon } from "@/icons"

export const NextWeekCard = (props: CardProps) => {
    const theme = useUnit($theme)
    const weather = props.weatherData

    return (
        <div className={`${styles.nextWeekCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <NextWeekIcon height="14px" fill="#fff" opacity={0.8} />
                <p className={styles.cardTitle}>NEXT WEEK FORECAST</p>
            </div>
            <div className={styles.daysContainer}>
                <DayCard weatherData={weather} index={0} isToday={true} />
                {Array.from({ length: 6 }, (_, i) => (
                    <DayCard key={i} index={i + 1} weatherData={weather} isToday={false} />
                ))}
            </div>
        </div>
    )
}
