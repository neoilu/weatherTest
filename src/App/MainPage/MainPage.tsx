import { useUnit } from "effector-react"
import { CardProps } from "../../types"
import { FeelsLikeCard, MainCard, PrecipitationCard } from "@/App/MainPage"
import styles from "./styles.module.css"
import { $blurActive } from "@/components/Header/blurStore"
import { NextHoursCard } from "./cards/NextHoursCard/NextHourCard"
import { NextWeekCard } from "./cards/NextWeekCard/NextWeekCard"
import { WindCard } from "./cards/WindCard/WindCard"

export const MainPage = ({ cityData, weatherData }: CardProps) => {
  const blur = useUnit($blurActive)
    return (
        <div className={`${styles.gridContainer} ${blur ? styles.blur : ""}`}>
            <div className={styles.main}>
                <MainCard cityData={cityData} weatherData={weatherData} />
            </div>
            <div className={styles.feelsLike}>
                <FeelsLikeCard cityData={cityData} weatherData={weatherData} />
            </div>
            <div className={styles.precipitation}>
                <PrecipitationCard cityData={cityData} weatherData={weatherData} />
            </div>
            <div className={styles.nextHours}>
                <NextHoursCard cityData={cityData} weatherData={weatherData}/>
            </div>
            <div className={styles.nextWeek}>
                <NextWeekCard cityData={cityData} weatherData={weatherData}/>
            </div>
            <div className={styles.wind}>
                <WindCard cityData={cityData} weatherData={weatherData}/>
            </div>
        </div>
    )
}
