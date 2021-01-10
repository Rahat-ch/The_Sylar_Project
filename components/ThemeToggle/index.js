import React from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <>
            <button
                type="button"
                style={{
                    backgroundImage: "url('/static/light_dark.png')",
                    backgroundSize: '30px',
                    width: '30px',
                    height: '30px',
                }}
                onClick={() => {
                    switch (theme) {
                        case 'dark':
                            setTheme('light')
                            break
                        case 'light':
                            setTheme('dark')
                            break
                        default:
                            setTheme('light')
                    }
                }}
            ></button>
        </>
    )
}

export default Toggle
