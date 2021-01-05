import React, { createContext, useState } from 'react'

export const ModalContext = createContext(null)

/* eslint react/prop-types: 0 */
export function ModalProvider({ children }) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')
    return (
        <ModalContext.Provider
            value={{ isModalVisible, setIsModalVisible, responseMessage, setResponseMessage }}
        >
            {children}
        </ModalContext.Provider>
    )
}
