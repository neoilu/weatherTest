import { Component } from "solid-js"
import { CardProps } from "@/types"
import styles from "./style.module.css"
import DayCard from "@/components/DayCard/DayCard"

const NextWeekCard: Component<CardProps> = props => {

    if (!props.weather || !props.data) return <div>Loading...</div>

    const weather = props.weather
    const data = props.data
    
    return (
        <div class={`${styles.card}`}>
            <DayCard weather={weather} index={0} isToday={true} />
            {Array.from({ length: 6 }, (_, i) => (
                <DayCard
                    index={i + 1}
                    weather={weather}
                    isToday={false}
                />
            ))}
        </div>
    )
}    

export default NextWeekCard
