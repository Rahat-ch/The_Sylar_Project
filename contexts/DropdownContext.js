import React, { createContext, useState, useContext } from 'react'
import { ApiContext } from './ApiContext'

export const DropdownContext = createContext(null)

/* eslint react/prop-types: 0 */
export function DropdownProvider({ children }) {
    const apiData = useContext(ApiContext)
    const dropDownData = ['Choose a Location', ...Object.keys(apiData)]
    const [location, setLocation] = useState(dropDownData[0])
    return (
        <DropdownContext.Provider value={{ dropDownData, location, setLocation }}>
            {children}
        </DropdownContext.Provider>
    )
}
