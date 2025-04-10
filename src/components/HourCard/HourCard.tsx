import { getWeatherState, normalizeTime } from "@/utils"
import styles from "./styles.module.css"
import { WeatherData, WeatherState } from "@/types"

interface HourCardProps {
    timeIndex: number
    weatherData: WeatherData
    isNow?: boolean
}

const resolveWeatherState = (weatherCode: number, timeIndex: number): WeatherState => {
    const adjustedTime = timeIndex % 24;
    const isNight = adjustedTime >= 21 || adjustedTime <= 5;
    console.log(timeIndex, adjustedTime)
    
    if (isNight) {
        if (weatherCode === 0 || weatherCode === 1) {
            return getWeatherState(105); 
        } else if (weatherCode === 2) {
            return getWeatherState(106);
        }
    }

    return getWeatherState(weatherCode);
}
export const HourCard = ({ timeIndex, weatherData, isNow }: HourCardProps) => {
    const time = weatherData?.hourly.time[timeIndex]
    const weatherCode = weatherData?.hourly.weathercode[timeIndex]

    if (!time || weatherCode === undefined) {
        return <div>Invalid data</div>
    }

    const weather = resolveWeatherState(weatherCode, timeIndex)
    const temperature = Math.round(weatherData.hourly.temperature_2m[timeIndex])

    return (
        <div className={styles.hourlyCard}>
            <p className={styles.timeLabel}>{isNow ? "Now" : normalizeTime(time)}</p>
            <img className={styles.weatherIcon} src={weather.icon} alt={weather.name} />
            <p className={styles.hourlyTemperature}>{temperature}°</p>
        </div>
    )
}
