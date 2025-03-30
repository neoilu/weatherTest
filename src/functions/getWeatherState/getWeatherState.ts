const getWeatherState = (code: number) => {
    const descriptions: Record<number, string> = {
        0: "Clear",
        1: "Partly Cloudy",
        2: "Variable Cloudiness",
        3: "Overcast",
        45: "Fog",
        48: "Fog",
        51: "Light Drizzle",
        53: "Light Drizzle",
        55: "Light Drizzle",
        56: "Freezing Drizzle",
        57: "Freezing Drizzle",
        61: "Rain",
        63: "Rain",
        65: "Rain",
        66: "Freezing Rain",
        67: "Freezing Rain",
        71: "Snowfall",
        73: "Snowfall",
        75: "Snowfall",
        77: "Snow Grains",
        80: "Shower",
        81: "Shower",
        82: "Shower",
        85: "Heavy Snow",
        86: "Heavy Snow",
        95: "Thunderstorm",
        96: "Thunderstorm with Hail",
        99: "Thunderstorm with Hail",
    };

    return descriptions[code] || "Unknown Weather";
};

export default getWeatherState;
