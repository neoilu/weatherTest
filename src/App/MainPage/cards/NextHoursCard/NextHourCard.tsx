import { HourCard } from "@/components"
import styles from "./styles.module.css"
import { getTimeIndex } from "@/utils"
import { useUnit } from "effector-react"
import { $cityData, $theme } from "@/api"
import { useRef } from "react"

export const NextHoursCard = () => {
    const theme = useUnit($theme)
    const cityData = useUnit($cityData)
    const scrollRef = useRef<HTMLDivElement>(null)

    const timeIndex = getTimeIndex(cityData!)
    if (timeIndex == null) {
        return <div>Error: invalid data</div>
    }

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (scrollRef.current) {
            e.preventDefault()
            scrollRef.current.scrollLeft += e.deltaY
        }
    }

    return (
        <div className={`${styles.nextHoursCard} ${styles[theme]}`}>
            <div className={styles.hourlyScroll} ref={scrollRef} onWheel={handleWheel}>
                <HourCard timeIndex={timeIndex} isNow={true} />
                {Array.from({ length: 23 }, (_, i) => (
                    <HourCard key={i} timeIndex={timeIndex + i + 1} isNow={false} />
                ))}
            </div>
        </div>
    )
}
