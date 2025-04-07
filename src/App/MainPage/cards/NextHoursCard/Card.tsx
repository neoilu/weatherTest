import { Component } from "solid-js"
import { CardProps } from "@/types"
import { HourCard } from "@/components"
import styles from "./style.module.css"
import { getTimeIndex } from "@/utils"

const NextHoursCard: Component<CardProps> = props => {
    if (!props.weather || !props.data) {
        return <div>Loading...</div>
    }

    const timeIndex = getTimeIndex(props.weather, props.data)
    if (timeIndex == null) {
        return <div>Error: invalid time index</div>
    }

    return (
        <div class={`${styles.card}`}>
            <div class={styles.scroll}>
                <HourCard timeIndex={timeIndex} weather={props.weather} isNow={true}/>
                {Array.from({ length: 23 }, (_, i) => (
                    <HourCard
                        timeIndex={timeIndex + i + 1}
                        weather={props.weather}
                        isNow={false}
                    />
                ))}
            </div>
        </div>
    )
}

export default NextHoursCard
