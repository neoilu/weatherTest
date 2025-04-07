import { Component, onMount, createSignal, createEffect } from "solid-js";
import { useFetchWeather, useTheme, useFetchData } from "@/hooks";
import { Router, Route } from "@solidjs/router";
import { MainPage, InfoPage } from "./";
import { Footer } from "@/components";
import { Header } from "@/components";
import styles from "./style.module.css";
import { CardProps, MainDataResponse, WeatherDataResponse } from "@/types";

const App: Component = () => {
    console.log("[App] Initializing component");
    
    const { dataResponse, fetchData } = useFetchData();
    const { weatherResponse, fetchWeather } = useFetchWeather();
    const { theme, updateTheme } = useTheme();

    const [props, setProps] = createSignal<CardProps>({ data: undefined, weather: undefined });
    const [loading, setLoading] = createSignal(false);

    const handleCityChange = async (weather: WeatherDataResponse, data: MainDataResponse) => {
        console.log("[App.handleCityChange] Received new city data:", { weather, data });
        
        const newData = {
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone
        };
        
        const newWeather = {
            current_weather: { ...weather.current_weather },
            daily: { ...weather.daily },
            hourly: { ...weather.hourly }
        };
        
        setProps({ data: newData, weather: newWeather });
        updateTheme(newWeather);
    };

    const fetchProps = async () => {
        try {
            setLoading(true);
            await fetchData();
            
            const data = dataResponse();
            
            if (data) {
                await fetchWeather(data);
                
                const weather = weatherResponse();
                
                if (weather) {
                    setProps({ data, weather });
                }
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    };

    onMount(() => {
        fetchProps();
    });

    createEffect(() => {
        const weather = weatherResponse();
        if (weather) {
            updateTheme(weather);
        }
    });


    return (
        <>
            {loading() ? (
                <div>Loading...</div>
            ) : props().weather && props().data ? (
                <>
                    <div class={styles.header}>
                        <Header 
                            weather={props().weather} 
                            data={props().data} 
                            onHandleCity={handleCityChange} 
                        />
                    </div>
                    <Router>
                        <Route path="/" component={() => <MainPage data={props().data} weather={props().weather} />} />
                        <Route path="/info" component={() => <InfoPage data={props().data} weather={props().weather} />} />
                    </Router>
                    <Footer data={props().data} weather={props().weather} />
                </>
            ) : (
                <div>No weather data available</div>
            )}
        </>
    );
};

export default App;