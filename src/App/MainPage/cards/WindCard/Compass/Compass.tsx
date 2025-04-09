import { ArrowIcon, CompassSvg } from "@/icons"
import styles from "./style.module.css"

interface CompassProps {
    direction: number
}

export const Compass = (props: CompassProps) => {
    return (
        <div className={styles.compass}>
            <CompassSvg width={150} height={150} color="#d9d9d9" opacity={0.4} />
            <ArrowIcon
                width={150}
                fill="#d9d9d9"
                opacity={1}
                style={{
                    transform: `rotate(${props.direction}deg)`,
                }}
            />
        </div>
    )
}

