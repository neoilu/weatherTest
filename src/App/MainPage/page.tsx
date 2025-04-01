import { Component } from "solid-js"
import { CardProps } from "@/types"
import styles from "./style.module.css"
import Header from "./Header/Header"
import {
    MainCard,
    FeelsLikeCard,
    PrecipitationCard,
    NextHoursCard,
    NextWeekCard,
    WindCard,
} from "./cards"

const MainPage: Component<CardProps> = props => {
    if (!props.data && !props.weather) {
        return <p>Loading...</p>
    }

    const commonProps = {
        data: props.data,
        weather: props.weather,
        theme: props.theme!,
    }

    console.log(props.theme)

    return (
        <>
            <Header theme={props.theme()} />
            <div class={styles.gridContainer}>
                <div class={styles.main}>
                    <MainCard {...commonProps} />
                </div>
                <div class={styles.feelsLike}>
                    <FeelsLikeCard {...commonProps} />
                </div>
                <div class={styles.precipitation}>
                    <PrecipitationCard {...commonProps} />
                </div>
                <div class={styles.nextHours}>
                    <NextHoursCard {...commonProps} />
                </div>
                <div class={styles.wind}>
                    <WindCard {...commonProps} />
                </div>
                <div class={styles.nextWeek}>
                    <NextWeekCard {...commonProps} />
                </div>
            </div>
        </>
    )
}

export default MainPage
