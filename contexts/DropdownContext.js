import React, { createContext, useState, useContext } from 'react'
import { ApiContext } from './ApiContext'

export const DropdownContext = createContext(null)

/* eslint react/prop-types: 0 */
export function DropdownProvider({ children }) {
    const apiData = useContext(ApiContext)
    const dropDownData = [...Object.keys(apiData)].sort()
    const [location, setLocation] = useState('Choose a Location')
    const createResourceData = dropDownData.map((state) => {
        return {
            name: state,
            id: apiData[state][0].stateId[0],
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
