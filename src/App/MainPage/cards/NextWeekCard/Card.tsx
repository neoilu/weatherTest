import { Component } from "solid-js"
import { CardProps } from "@/types"
import styles from "./style.module.css"

const NextWeekCard: Component<CardProps> = props => {
    return <div class={`${styles.card} ${styles[props.theme()]}`}>
        
    </div>
}

export default NextWeekCard
