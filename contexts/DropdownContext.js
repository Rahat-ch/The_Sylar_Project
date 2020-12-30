import React, { createContext, useState, useContext } from 'react'
import { ApiContext } from './ApiContext'

export const DropdownContext = createContext(null)

/* eslint react/prop-types: 0 */
export function DropdownProvider({ children }) {
    const apiData = useContext(ApiContext)
    const dropDownData = [...Object.keys(apiData)]
    const [location, setLocation] = useState('Choose a Location')
    return (
        <DropdownContext.Provider value={{ dropDownData, location, setLocation }}>
            {children}
        </DropdownContext.Provider>
    )
}
