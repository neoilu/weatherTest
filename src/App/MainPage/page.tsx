import { Component } from "solid-js"
import { CardProps } from "@/types"
import Header from "./Header/Header"
import { MainCard, FeelsLikeCard, PrecipitationCard } from "./cards"

const MainPage: Component<CardProps> = props => {
    if (!props.data && !props.weather) {
        return (
            <p>Loading...</p>
        )
    }

    const commonProps = {
        data: props.data,
        weather: props.weather,
        theme: props.theme!,
      };

    return (
        <>
            <Header theme={props.theme!} />
            <div>
                <div>
                    <MainCard {...commonProps}/>
                    <FeelsLikeCard {...commonProps}/>
                    <PrecipitationCard {...commonProps}/>
                </div>
            </div>
        </>
    )
}

export default MainPage
