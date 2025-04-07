import { Component } from "solid-js"
import { CardProps } from "@/types"
import { getTimeIndex, getFeelsLikeReason } from "@/utils"
import styles from "./styles.module.css"

const FeelsLikeCard: Component<CardProps> = props => {
    if (!props.data || !props.weather) {
        return <div>Loading...</div>
    }

    return (
        <div class={`${styles.card}`}>
            <p class={styles.cardName}>FEELS LIKE</p>
            <p class={styles.temperature}>
                {Math.round(
                    props.weather.hourly.apparent_temperature[
                        getTimeIndex(props.weather, props.data)!
                    ],
                )}
                °
            </p>
            <p class={styles.feelsLikeReason}>
                {getFeelsLikeReason(props.weather, props.data)!}
            </p>
        </div>
    )
}

export default FeelsLikeCard
