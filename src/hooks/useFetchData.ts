import { createSignal } from "solid-js";
import { getData } from "@/api"; 
import type { MainDataResponse } from "@/types"; 

export function useFetchData() {
    const [dataResponse, setDataResponse] = createSignal<MainDataResponse | null>(null);

    async function fetchData() {
        try {
            const data = await getData();
            if (!data) throw new Error("getData err!");
            setDataResponse(data);
        } catch (e) {
            console.error(e);
        }
    }

    return { dataResponse, fetchData };
}
