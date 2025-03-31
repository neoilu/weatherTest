import { Component } from "solid-js"
import styles from "./styles.module.css"
import SearchIcon from "@/assets/icons/searchIcon"

interface HeaderProps {
    theme: string
}

const Header: Component<HeaderProps> = props => {
    console.log(props.theme)
    return (
        <>
            <div class={styles.headerBlock}>
                <div class={styles.searchInput}>
                    <SearchIcon width={16} height={16} color="#ebebf5" opacity={0.6}/>
                    <input
                        class={`${styles.input} ${
                            props.theme ? styles[props.theme] : ""
                        }`}
                        name="search"
                        id="search"
                        placeholder="Search"
                    />
                </div>
            </div>
        </>
    )
}

export default Header
