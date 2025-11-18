// import { useEffect, useState } from "react"

import { useEffect } from "react"
import { useState } from "react"

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})

//     useEffect( () => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then( (data) => data.json())
//         .then( (data) => setData(data[currency]))
//     }, [currency])

//     return data
// }

// export default useCurrencyInfo;

const useCurrencyInfo = (currency) => {

    const [data, setData] = useState({})

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res) => res.json())
        .then( (res) => setData(res[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo;