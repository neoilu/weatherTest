import { $blurActive } from "@/components/Header/blurStore"
import { useUnit } from "effector-react"
import styles from "./styles.module.css"
import { FeelsLikeCard, MainCard, NextHoursCard, NextWeekCard, PrecipitationCard, WindCard } from "."


export const MainPage = () => {
  const blur = useUnit($blurActive)
    return (
        <div className={`${styles.gridContainer} ${blur ? styles.blur : ""}`}>
            <div className={styles.main}>
                <MainCard/>
            </div>
            <div className={styles.feelsLike}>
                <FeelsLikeCard/>
            </div>
            <div className={styles.precipitation}>
                <PrecipitationCard/>
            </div>
            <div className={styles.nextHours}>
                <NextHoursCard/>
            </div>
            <div className={styles.nextWeek}>
                <NextWeekCard/>
            </div>
            <div className={styles.wind}>
                <WindCard/>
            </div>
        </div>
    )
}
