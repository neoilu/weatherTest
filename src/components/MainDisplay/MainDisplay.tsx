import { Component, createSignal, onMount } from "solid-js"
import getData from "../../functions/getData/getData"

const MainDisplay: Component = () => {
    const [city, setCity] = createSignal("...")

    onMount(() => {
        getData().then(data => setCity(data.city))
    })

    return <div>{city()}</div>
}

export default MainDisplay
