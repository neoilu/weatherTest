import { Component } from "solid-js"
import { CardProps } from "@/types"
import Compass from "./Compass/Compass"
import styles from "./style.module.css"

const WindCard: Component<CardProps> = props => {
    return (
        <div class={`${styles.card}`}>
            <div>
                <p>Wind: {props.weather?.current_weather.windspeed} km/h</p>
                <p>Direction: {props.weather?.current_weather.winddirection}</p>
            </div>
            <div>
                <Compass direction={props.weather?.current_weather.winddirection ?? 0} />
            </div>
        </div>
    )
}

export default WindCard
