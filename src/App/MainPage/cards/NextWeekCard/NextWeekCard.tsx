import { DayCard } from "@/components"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { NextWeekIcon } from "@/icons"
import styles from "./style.module.css"

export const NextWeekCard = () => {
    const theme = useUnit($theme)

    return (
        <div className={`${styles.nextWeekCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <NextWeekIcon height="14px" fill="#fff" opacity={0.8} />
                <p className={styles.cardTitle}>NEXT WEEK FORECAST</p>
            </div>
            <div className={styles.daysContainer}>
                <DayCard index={0} isToday={true} />
                {Array.from({ length: 6 }, (_, i) => (
                    <DayCard key={i} index={i + 1} isToday={false} />
                ))}
            </div>
        </div>
    )
}
