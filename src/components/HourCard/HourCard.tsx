import { getTimeIndex, getWeatherState, normalizeTime} from "@/utils";
import { Component } from "solid-js";
import { CardProps } from "@/types";

const HourCard: Component<CardProps> = (props) => {
    if (!props.data || !props.weather) {
        return <div>Loading...</div>
    }

    const timeIndex = getTimeIndex(props.weather, props.data);
    const time = props.weather?.hourly.time[timeIndex!]
    const weatherCode = props.weather?.hourly.weathercode[timeIndex!];
    const weatherState = getWeatherState(weatherCode);

    return (
        <div>
            <p>{normalizeTime(time)}</p>
            <p>{weatherState.name}</p>
        </div>
    );
};

export default HourCard;
