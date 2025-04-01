import { Component } from "solid-js"
import { CardProps } from "@/types"
import { getTimeIndex, getFeelsLikeReason } from "@/utils"
import styles from "./styles.module.css"

const FeelsLikeCard: Component<CardProps> = props => {
    if (!props.data || !props.weather) {
        return <div>Loading...</div>
    }

    console.log(props.weather)

    return (
        <div class={`${styles.card} ${props.theme ? styles[props.theme] : ""}`}>
            <p class={styles.feelsLike}>FEELS LIKE</p>
            <p class={styles.temperature}>
                {Math.round(
                    props.weather.hourly.apparent_temperature[
                        getTimeIndex(props.weather)!
                    ],
                )}
                °
            </p>

            <p class={styles.feelsLikeReason}>{getFeelsLikeReason(props.weather)!}</p>
        </div>
    )
}

export default FeelsLikeCard
