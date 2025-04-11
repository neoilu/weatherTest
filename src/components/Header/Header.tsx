import React, { useState } from "react"
import { useUnit } from "effector-react"
import { debounce } from "lodash"
import { $suggestions, $theme, searchSuggestions, setData, setSuggestionsFx } from "@/api"
import { setBlur } from "./blurStore"
import { SearchIcon, XIcon } from "@/icons"
import styles from "./styles.module.css"

export const Header = () => {
    const [inputValue, setInputValue] = useState("")
    const [isFocus, setIsFocus] = useState(false)
    const suggestions = useUnit($suggestions)
    const theme = useUnit($theme)

    const debouncedSearch = debounce((value: string) => {
        searchSuggestions(value)
    }, 500)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        debouncedSearch(value)
    }

    const handleCancel = () => {
        setInputValue("")
        setSuggestionsFx()
        toggleFocus(false)
    }

    const handleSearch = (city: any) => {
        setData({
            city: city.address_line1,
            country: city.address_line2,
            latitude: city.bbox.lat1,
            longitude: city.bbox.lon1,
            timezone: city.timezone.name,
        })
        toggleFocus(false)
    }

    const toggleFocus = (focus: boolean) => {
        setBlur(focus)
        setIsFocus(focus)

        if (!focus) {
            setInputValue("")
            setSuggestionsFx()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && suggestions.length > 0) {
            handleSearch(suggestions[0])
            toggleFocus(false)
            e.currentTarget.blur()
        }
    }

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.searchContainer}>
                <div className={styles.inputBox}>
                    <div className={`${styles.searchInputWrapper} ${styles[theme]}`}>
                        <div className={styles.searchIcon}>
                            <SearchIcon width={16} height={16} fill="#f0f0f3" opacity={0.8} />
                        </div>

                        <input
                            className={styles.searchInput}
                            value={inputValue}
                            onInput={handleInputChange}
                            onFocus={() => toggleFocus(true)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search city..."
                            autoComplete="off"
                        />

                        <button className={`${styles.cancelButton} ${!isFocus && styles.hidden}`} onClick={handleCancel}>
                            <XIcon width={16} height={16} fill="#f0f0f3" opacity={0.8} />
                        </button>
                    </div>

                    {isFocus && suggestions.length > 0 && (
                        <ul className={`${styles.suggestionsList} ${styles[theme]}`}>
                            {suggestions.map(city => (
                                <li key={city.latitude} className={styles.suggestionItem} onClick={() => handleSearch(city)}>
                                    <span className={styles.cityName}>{city.city}</span>
                                    {city.country && <span className={styles.countryName}>{city.country}</span>}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
