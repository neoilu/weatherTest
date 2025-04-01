import { Component } from "solid-js"
import { CardProps } from "@/types"
import styles from "./style.module.css"

const PrecipitationCard: Component<CardProps> = props => {
    return (
        <div class={`${styles.card} ${props.theme ? styles[props.theme] : ""}`}>
            <p class={styles.cardName}>PRECIPITATION</p>
            <div class={styles.middle}>
                <p class={styles.precipitationSumToday}>
                    {Math.round(props.weather?.daily.precipitation_sum[0]!)} mm
                </p>
                <p class={styles.precipitationSumTodayText}>Today</p>
            </div>
            <p class={styles.precipitationSumTomorrow}>
                {Math.round(props.weather?.daily.precipitation_sum[1]!)} mm
                expected tomorrow
            </p>
        </div>
    )
}

export default PrecipitationCard
