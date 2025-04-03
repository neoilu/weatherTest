import { Component } from "solid-js"
import { CardProps } from "@/types"
import { HourCard } from "@/components"
import styles from "./style.module.css"

const NextHoursCard: Component<CardProps> = props => {
    return (
        <div class={`${styles.card} ${styles[props.theme()]}`}>
            <HourCard {...props} />
        </div>
    )
}

export default NextHoursCard
