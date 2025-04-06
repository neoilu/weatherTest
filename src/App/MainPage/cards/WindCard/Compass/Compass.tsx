import { Component } from "solid-js"
import { Arrow, CompassSvg } from "@/icons"
import styles from "./style.module.css"

interface CompassProps {
    direction: number
}

const Compass: Component<CompassProps> = props => {
    return (
        <div class={styles.compass}>
            <CompassSvg width={200} height={200} color="#d9d9d9" opacity={0.4} />
            <Arrow
                width={200}
                height={75}
                color="#d9d9d9"
                opacity={0.8}
                style={{
                    transform: `rotate(${props.direction}deg)`,
                }}
            />
        </div>
    )
}

export default Compass
