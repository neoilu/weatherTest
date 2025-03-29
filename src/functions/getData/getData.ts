async function getData() {
    try {
        let response = await fetch("https://ipwhois.app/json/")
        let data = await response.json()
        return data
    } catch (e) {
        console.error(e)
        return null
    }
}

export default getData
