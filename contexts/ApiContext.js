import React, { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext(null)

/* eslint react/prop-types: 0 */
export function ApiProvider({ children }) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('/api/getResources')
            .then((response) => response.json())
            .then((payload) => {
                setData(payload)
            })
    }, [])
    console.log({data})
    return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}
