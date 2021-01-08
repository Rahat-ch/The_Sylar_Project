import React from 'react'
export const ThemeContext = React.createContext()

const getInitTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedThemeVal = window.localStorage.getItem('color-theme')
        const mediacs = window.matchMedia('(prefers-color-scheme: dark)')

        // dark mode when previous state is dark or browser is set to dark theme
        if (storedThemeVal == 'dark' || mediacs.matches) {
            return 'dark'
        }
    }
    // light mode as default
    return 'light'
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(getInitTheme)

    const setLayoutTheme = (themeStr) => {
        const lroot = window.document.getElementById('layoutRoot')
        const isDark = themeStr === 'dark'

        lroot.classList.remove(isDark ? 'light' : 'dark')
        lroot.classList.add(themeStr)

        localStorage.setItem('color-theme', themeStr)
    }

    React.useEffect(() => {
        setLayoutTheme(theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
