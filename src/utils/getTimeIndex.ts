import { WeatherDataResponse } from "@/types";

const getTimeIndex = (weather: WeatherDataResponse) => {
    const localNow = new Date();
    
    for (let i = 0; i < weather.hourly.time.length; i++) {
        const gmtDate = new Date(weather.hourly.time[i] + "Z"); 
        const localDate = new Date(gmtDate.toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

        if (localDate.getHours() === localNow.getHours()) {
            return i;
        }
    }

    return null; 
}

export default getTimeIndex