import { useEffect } from "react"
import { Header } from "../components"
import { $cityData, $error, $loading, fetchData, $weatherData} from "../api"
import { MainPage } from "./MainPage/MainPage"
import { useUnit } from "effector-react"
import styles from "./styles.module.css"

export const App = () => {
    const cityData = useUnit($cityData)
    const weatherData = useUnit($weatherData)
    const loading = useUnit($loading)
    const error = useUnit($error)


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <div className={styles.loading}></div>
    }

    if (error) {
        return <p>Error</p>
    }

    return (
        cityData && weatherData && (
            <div>
                <Header />
                <MainPage cityData={cityData} weatherData={weatherData} />
            </div>
        )
    )
}
