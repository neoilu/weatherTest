import { WeatherState } from "../types";
import * as assets from "../assets";

const getWeatherState = (code: number) => {
    const description: Record<number, WeatherState> = {
        0: { name: "Clear Sky", icon: assets.clear },
        1: { name: "Mainly Clear", icon: assets.clear },
        2: { name: "Partly Cloudy", icon: assets.partlyCloudy },
        3: { name: "Overcast", icon: assets.cloudy },
        45: { name: "Fog", icon: assets.fog },
        48: { name: "Depositing Rime Fog", icon: assets.fog },
        51: { name: "Light Drizzle", icon: assets.drizzle },
        53: { name: "Moderate Drizzle", icon: assets.drizzle },
        55: { name: "Dense Drizzle", icon: assets.drizzle },
        56: { name: "Light Freezing Drizzle", icon: assets.freezingRain },
        57: { name: "Dense Freezing Drizzle", icon: assets.freezingRain },
        61: { name: "Slight Rain", icon: assets.rain },
        63: { name: "Moderate Rain", icon: assets.rain },
        65: { name: "Heavy Rain", icon: assets.heavyRain },
        66: { name: "Light Freezing Rain", icon: assets.freezingRain },
        67: { name: "Heavy Freezing Rain", icon: assets.freezingRain },
        71: { name: "Light Snowfall", icon: assets.snow },
        73: { name: "Moderate Snowfall", icon: assets.snow },
        75: { name: "Heavy Snowfall", icon: assets.heavySnow },
        77: { name: "Snow Grains", icon: assets.snow },
        80: { name: "Slight Rain Showers", icon: assets.rain },
        81: { name: "Moderate Rain Showers", icon: assets.rain },
        82: { name: "Violent Rain Showers", icon: assets.heavyRain },
        85: { name: "Slight Snow Showers", icon: assets.snow },
        86: { name: "Heavy Snow Showers", icon: assets.heavySnow },
        95: { name: "Thunderstorm", icon: assets.thunderstorm },
        96: { name: "Thunderstorm with Slight Hail", icon: assets.thunderstorm },
        99: { name: "Thunderstorm with Heavy Hail", icon: assets.thunderstorm },
        101: { name: "Sunrise", icon: assets.sunrise },
        102: { name: "Sunset", icon: assets.sunset },
        105: { name: "Night Clear Sky", icon: assets.clearNight },
        106: { name: "Night Partly Cloudy", icon: assets.partlyCloudyNight },
    };

    return description[code] || { name: "Unknown Weather", icon: assets.clear };
};

export default getWeatherState;