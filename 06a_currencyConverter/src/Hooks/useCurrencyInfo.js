import { useEffect, useState } from "react"

const useCurrency = (currency) => {

    const [data, setData] = useState({})

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((data) => data.json())
        .then((data) => setData(data[currency]))
    }, [currency])

    return data
}

export default useCurrency