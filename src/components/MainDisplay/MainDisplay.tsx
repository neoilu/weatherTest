import { Component, createSignal, onMount } from "solid-js";
import getCity from "../../functions/getCity/getCity";

const MainDisplay: Component = () => {
    const [city, setCity] = createSignal("...");

    onMount(() => {
        getCity().then(setCity);
    });

    return <div>{city()}</div>;
};

export default MainDisplay;
