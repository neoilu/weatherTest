async function getCity() {
    try {
        let response = await fetch("http://ip-api.com/json/")
        let data = await response.json()
        return data.city
    } catch (e) {
        return null
    }
}

export default getCity