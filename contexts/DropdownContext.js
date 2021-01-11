import React, { createContext, useState, useContext, useEffect } from 'react'
import qs from 'qs'
import { useRouter } from 'next/router'
import { ApiContext } from './ApiContext'

export const DropdownContext = createContext(null)

/* eslint react/prop-types: 0 */
export function DropdownProvider({ children }) {
    const router = useRouter()
    const { location: locationQS } = qs.parse(router.asPath.replace('/?', ''))

    const apiData = useContext(ApiContext)
    const dropDownData = [...Object.keys(apiData)].sort()
    const [location, setLocation] = useState(locationQS || 'Choose a Location')
    useEffect(() => {
        router.push({ query: { location: encodeURI(location) } })
    }, [location])

    const createResourceData = dropDownData.map((state) => {
        return {
            name: state,
            // id: apiData[state][0].stateId[0],
        }
    })
    return (
        <DropdownContext.Provider
            value={{ dropDownData, location, setLocation, createResourceData }}
        >
            {children}
        </DropdownContext.Provider>
    )
}
