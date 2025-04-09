import { createEffect, createStore } from "effector";
import { CityData } from "../types";


interface ApiResponse {
    results: CityData[];
}

const getSuggestionsFx = createEffect(async (input: string): Promise<CityData[]> => {
    if (!input.trim()) {
        return [];
    }

    try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&apiKey=aa5686cee1a9415d9982bf7e82efe4fe`);

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        return data.results || [];
    } catch (e) {
        console.error(e);
        return [];
    }
});

export const $suggestions = createStore<CityData[]>([]);


export const setSuggestionsFx = createEffect( () => {
    return []
} )

$suggestions
    .on(getSuggestionsFx.doneData, (_, data) => data)
    .on(setSuggestionsFx, () => ([]));

export const searchSuggestions = (input: string) => {
    getSuggestionsFx(input);
};
