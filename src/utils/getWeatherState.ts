import { WeatherState } from "@/types"

const getWeatherState = (code: number) => {
    const description: Record<number, WeatherState> = {
        0: { name: "Clear Sky", icon: "clear_sky.png" },
        1: { name: "Mainly Clear", icon: "mainly_clear.png" },
        2: { name: "Partly Cloudy", icon: "partly_cloudy.png" },
        3: { name: "Overcast", icon: "overcast.png" },
        45: { name: "Fog", icon: "fog.png" },
        48: { name: "Depositing Rime Fog", icon: "rime_fog.png" },
        51: { name: "Light Drizzle", icon: "light_drizzle.png" },
        53: { name: "Moderate Drizzle", icon: "moderate_drizzle.png" },
        55: { name: "Dense Drizzle", icon: "dense_drizzle.png" },
        56: { name: "Light Freezing Drizzle", icon: "light_freezing_drizzle.png" },
        57: { name: "Dense Freezing Drizzle", icon: "dense_freezing_drizzle.png" },
        61: { name: "Slight Rain", icon: "slight_rain.png" },
        63: { name: "Moderate Rain", icon: "moderate_rain.png" },
        65: { name: "Heavy Rain", icon: "heavy_rain.png" },
        66: { name: "Light Freezing Rain", icon: "light_freezing_rain.png" },
        67: { name: "Heavy Freezing Rain", icon: "heavy_freezing_rain.png" },
        71: { name: "Light Snowfall", icon: "light_snowfall.png" },
        73: { name: "Moderate Snowfall", icon: "moderate_snowfall.png" },
        75: { name: "Heavy Snowfall", icon: "heavy_snowfall.png" },
        77: { name: "Snow Grains", icon: "snow_grains.png" },
        80: { name: "Slight Rain Showers", icon: "slight_rain_showers.png" },
        81: { name: "Moderate Rain Showers", icon: "moderate_rain_showers.png" },
        82: { name: "Violent Rain Showers", icon: "violent_rain_showers.png" },
        85: { name: "Slight Snow Showers", icon: "slight_snow_showers.png" },
        86: { name: "Heavy Snow Showers", icon: "heavy_snow_showers.png" },
        95: { name: "Thunderstorm", icon: "thunderstorm.png" },
        96: { name: "Thunderstorm with Slight Hail", icon: "thunderstorm_slight_hail.png" },
        99: { name: "Thunderstorm with Heavy Hail", icon: "thunderstorm_heavy_hail.png" },
        101: { name: "Sunrise", icon: "sunrise.png" },
        102: { name: "Sunset", icon: "sunset.png" },
        103: { name: "Haze", icon: "haze.png" },
        104: { name: "Windy", icon: "windy.png" },
        105: { name: "Night Clear Sky", icon: "night_clear_sky.png" },
        106: { name: "Night Partly Cloudy", icon: "night_partly_cloudy.png" },
        107: { name: "Night Drizzle", icon: "night_drizzle.png" }    
    };

    return description[code] || { name: "Unknown Weather", icon: "unknown.png" };
};

export default getWeatherState;