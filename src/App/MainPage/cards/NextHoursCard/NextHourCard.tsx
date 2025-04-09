import { CardProps } from "@/types"
import { HourCard } from "@/components"
import styles from "./styles.module.css"
import { getTimeIndex } from "@/utils"
import { useUnit } from "effector-react"
import { $theme } from "@/api"
import { useRef } from "react" // Добавляем useRef

export const NextHoursCard = (props: CardProps) => {
    const theme = useUnit($theme)
    const scrollRef = useRef<HTMLDivElement>(null) // Создаем ref для контейнера прокрутки

    const timeIndex = getTimeIndex(props.weatherData, props.cityData)
    if (timeIndex == null) {
        return <div>Error: invalid time index</div>
    }

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (scrollRef.current) {
            e.preventDefault()
            scrollRef.current.scrollLeft += e.deltaY
        }
    }

    return (
        <div className={`${styles.nextHoursCard} ${styles[theme]}`}>
            <div 
                className={styles.hourlyScroll}
                ref={scrollRef}
                onWheel={handleWheel}
            >
                <HourCard timeIndex={timeIndex} weatherData={props.weatherData} isNow={true} />
                {Array.from({ length: 23 }, (_, i) => (
                    <HourCard
                        key={i}
                        timeIndex={timeIndex + i + 1}
                        weatherData={props.weatherData}
                        isNow={false}
                    />
                ))}
            </div>
        </div>
    )
}