import { createEvent, createStore, createEffect, sample } from "effector";
import { CityData } from "../types";
import { fetchWeatherFx } from "./getWeatherData";

export const $cityData = createStore<CityData | null>(null);
export const fetchData = createEvent();
export const setData = createEvent<CityData | null>();

const fetchDataFx = createEffect(async (): Promise<CityData | null> => {
    try {
        const response = await fetch("https://ipwhois.app/json/");

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.city || !data.latitude || !data.longitude || !data.timezone) {
            throw new Error("Main data bad response");
        }

        return {
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
        } as CityData;
    } catch (e) {
        console.error(e);
        return null;
    }
});

const setDataFx = createEffect((data: CityData | null) => data);

$cityData
    .on(setData, (_, data) => data)
    .on(fetchDataFx.doneData, (_, data) => data)

export const $loading = createStore<boolean>(false);
$loading
    .on(fetchDataFx.pending, (_, pending) => pending)
    .on(setDataFx.pending, (_, pending) => pending);

export const $error = createStore<string | null>(null);
$error
    .on(fetchDataFx.failData, (_, error) => error.message)
    .on(setDataFx.failData, (_, error) => error.message);

fetchData.watch(fetchDataFx);
setData.watch((data) => setDataFx(data));

sample({
    clock: $cityData,
    fn: (cityData: CityData | null) => {
        if (cityData === null) {
            return { latitude: "", longitude: "" };
        }

        return {
            latitude: String(cityData.latitude),
            longitude: String(cityData.longitude),
        };
    },
    target: fetchWeatherFx, 
});
