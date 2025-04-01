import { Component, createSignal } from "solid-js"
import styles from "./styles.module.css"
import { SearchIcon, XIcon } from "@/icons" 

interface HeaderProps {
    theme: string
}

const Header: Component<HeaderProps> = props => {
    const [searchValue, setSearchValue] = createSignal("")

    const handleCancel = () => {
        setSearchValue("")
    }

    const handleSearch = () => {
        console.log(searchValue())
    }

    return (
        <div class={styles.headerBlock}>
            <div class={styles.searchInput}>
                <button class={styles.searchButton} onClick={handleSearch}>
                    <SearchIcon
                        width={16}
                        height={16}
                        color="#f0f0f3"
                        opacity={0.8}
                    />
                </button>

                <input
                    class={`${styles.input} ${
                        props.theme ? styles[props.theme] : ""
                    }`}
                    name="search"
                    id="search"
                    placeholder="Search"
                    value={searchValue()}
                    onInput={e => setSearchValue(e.target.value)} 
                />

                {searchValue() && (
                    <button class={styles.cancelButton} onClick={handleCancel}>
                        <XIcon
                            width={16}
                            height={16}
                            color="#f0f0f3"
                            opacity={0.8}
                        />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Header
