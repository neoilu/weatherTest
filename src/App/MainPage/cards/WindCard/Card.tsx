import { Component } from "solid-js"
import { CardProps } from "@/types"
import styles from "./style.module.css"

const WindCard: Component<CardProps> = props => {
    return (
        <div class={`${styles.card} ${styles[props.theme()]}`}>
                        
        </div>
    )
}

export default WindCard
