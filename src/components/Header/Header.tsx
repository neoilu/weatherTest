import { Component } from "solid-js"
import styles from "./styles.module.css"

interface HeaderProps {
    theme: string
}

const Header: Component<HeaderProps> = props => {
    console.log(props.theme)
    return (
        <>
            <div class={styles.headerBlock}>
                <input
                    class={`${styles.input} ${
                        props.theme ? styles[props.theme] : ""
                    }`}
                    name="search"
                    id="search"
                    placeholder="Search"
                />
            </div>
        </>
    )
}

export default Header
