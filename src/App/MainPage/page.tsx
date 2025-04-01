import { Component } from "solid-js"
import { CardProps } from "@/types"
import Header from "./Header/Header"
import { MainCard, FeelsLikeCard } from "./cards"

const MainPage: Component<CardProps> = props => {
    if (!props.data && !props.weather) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <>
            <Header theme={props.theme!} />
            <div>
                <div>
                    <MainCard data={props.data} weather={props.weather} theme={props.theme!}/>
                    <FeelsLikeCard data = {props.data} weather={props.weather} theme={props.theme!}/>
                </div>
            </div>
        </>
    )
}

export default MainPage
