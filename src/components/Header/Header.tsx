import { Component, createSignal } from "solid-js";
import styles from "./style.module.css";
import { SearchIcon, XIcon } from "@/icons";
import { CardProps, MainDataResponse, WeatherDataResponse } from "@/types";
import { getWeather, search } from "@/api";
import debounce from "debounce";

interface HeaderProps extends CardProps {
    onHandleCity: (weather: WeatherDataResponse, data: MainDataResponse) => void;
}

const Header: Component<HeaderProps> = (props) => {
    console.log("[Header] Rendering with props:", props);
    
    const [searchValue, setSearchValue] = createSignal("");
    const [suggestions, setSuggestions] = createSignal<any[]>([]);
    const [isSearching, setIsSearching] = createSignal(false);

    const handleCancel = () => {
        console.log("[Header] Cancelling search");
        setSearchValue("");
        setSuggestions([]);
    };

    const debouncedSearch = debounce(async (value: string) => {
        console.log("[Header.debouncedSearch] Searching for:", value);
        
        if (!value.trim()) {
            console.log("[Header.debouncedSearch] Empty query, clearing suggestions");
            setSuggestions([]);
            return;
        }
        
        try {
            setIsSearching(true);
            console.log("[Header.debouncedSearch] Calling search API");
            const res = await search(value);
            console.log("[Header.debouncedSearch] Search results:", res);
            setSuggestions(res || []);
        } catch (error) {
            console.error("[Header.debouncedSearch] Search error:", error);
        } finally {
            console.log("[Header.debouncedSearch] Search completed");
            setIsSearching(false);
        }
    }, 500);

    const handleSelectCity = async (city: any) => {
        console.log("[Header.handleSelectCity] Selected city:", city);
        
        try {
            // Универсальное получение координат
            const lat = city.lat || city.bbox?.lat1 || city.geometry?.coordinates[1];
            const lon = city.lon || city.bbox?.lon1 || city.geometry?.coordinates[0];
            
            if (!lat || !lon) {
                console.error("Invalid coordinates:", city);
                return;
            }
    
            console.log("[Header.handleSelectCity] Fetching weather for:", lat, lon);
            const weatherData = await getWeather(lat.toString(), lon.toString());
            
            const mainData = {
                city: city.address_line1 || city.city || city.name,
                latitude: lat,
                longitude: lon,
                timezone: city.timezone?.offset_STD || "+00:00"
            };
    
            if (weatherData && mainData) {
                props.onHandleCity(weatherData, mainData);
                setSearchValue("");
                setSuggestions([]);
            }
        } catch (error) {
            console.error("City selection error:", error);
        }
    };

    console.log("[Header] Current state:", {
        searchValue: searchValue(),
        suggestions: suggestions(),
        isSearching: isSearching()
    });

    return (
        <div class={styles.headerBlock}>
            <div class={`${styles.searchWrapper}`}>
                <div class={styles.searchInput}>
                    <button class={styles.searchButton}>
                        <SearchIcon width={16} height={16} color="#f0f0f3" opacity={0.8} />
                    </button>

                    <input
                        class={styles.input}
                        value={searchValue()}
                        onInput={(e) => {
                            console.log("[Header] Search input changed:", e.target.value);
                            setSearchValue(e.target.value);
                            debouncedSearch(e.target.value);
                        }}
                        placeholder="Search city..."
                        autocomplete="off"
                    />

                    {searchValue() && (
                        <button class={styles.cancelButton} onClick={handleCancel}>
                            <XIcon width={16} height={16} color="#f0f0f3" opacity={0.8} />
                        </button>
                    )}
                </div>

                {isSearching() && <div class={styles.loading}>Searching...</div>}

                {suggestions().length > 0 && (
                    <ul class={styles.suggestions}>
                        {suggestions().map((item) => (
                            <li
                                class={styles.suggestionItem}
                                onClick={() => {
                                    console.log("[Header] Suggestion clicked:", item);
                                    handleSelectCity(item);
                                }}
                            >
                                <span class={styles.line1}>{item.address_line1}</span>
                                {item.address_line2 && (
                                    <span class={styles.line2}>{item.address_line2}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;