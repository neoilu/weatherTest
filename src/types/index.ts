export interface MainDataResponse {
    city: string
    latitude: string
    longitude: string
    timezone: string
}

export interface WeatherDataResponse {
    current_weather: {
        temperature: number
        windspeed: number
        winddirection: number
        weathercode: number
        is_day: number
    }
    hourly: {
        humidity: number[]
        time: string[]
        temperature_2m: number[]
        weathercode: number[]
        wind_speed_10m: number[]
        wind_direction_10m: number[]
        apparent_temperature: number[]
    }
    daily: {
        time: string[]
        temperature_2m_min: number[]
        temperature_2m_max: number[]
        precipitation_sum: number[]
        weathercode: number[]
    }
}

export interface CardProps {
    data?: MainDataResponse
    weather?: WeatherDataResponse
    theme: () => string
}
