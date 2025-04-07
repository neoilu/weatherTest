import { redirect } from "@solidjs/router"
import { createSignal } from "solid-js"

async function search(e: string) {
    if (!e) {
        return []
    }

    try {
        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${e}&format=json&apiKey=aa5686cee1a9415d9982bf7e82efe4fe`,
        )
        const data = await response.json()

        if (response.ok) {
            return data.results
        }
    } catch (e) {
        console.log(e)
        return []
    }
}

export default search
