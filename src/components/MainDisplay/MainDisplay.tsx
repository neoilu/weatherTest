import getWeatherState from "../../functions/getWeatherState/getWeatherState"
import { Component } from "solid-js"
import type { mainDataResponse, weatherDataResponse } from "types"

interface MainDisplayProps {
    data: mainDataResponse
    weather: weatherDataResponse
}

const MainDisplay: Component<MainDisplayProps> = ({ data, weather }: MainDisplayProps) => {
    return (
        <div>
            <div>
                <p>MY LOCATION</p>
                <p>{data.city}</p>
            </div>
            <div>
                <p>{Math.round(weather.current_weather.temperature)}°</p>
            </div>
            <div>
                <p>{getWeatherState(weather.current_weather.weathercode)}</p>
                <p>H:{Math.round(weather.daily.temperature_2m_max[0])} L:{Math.round(weather.daily.temperature_2m_min[0])} </p>
            </div>
        </div>
    )
}

export default MainDisplay
