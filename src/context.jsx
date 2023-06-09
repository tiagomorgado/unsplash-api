import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext()

const getInitialDarkMode = () => {
    /* 
     * Use JS to evaluate if user has a browser theme preference, dark or light, 
     * and apply that theme color accordingly, either by fetching from LocalStorage,
     * or fetching from Context API
     */
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
    const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
    return(
        storedDarkMode || prefersDarkMode
    )
}

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
    const [searchTerm, setSearchTerm] = useState('cat')

    /* Save in LocalStorage the preference for website theme */
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        localStorage.setItem('darkTheme', newDarkTheme)
    }

    /*
     * UseEffect is run whenever isDarkTheme is updated, to change
     * body styling accordingly
     */
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme)
    }, [isDarkTheme])

    return (
        <AppContext.Provider 
            value={{
                isDarkTheme, 
                toggleDarkTheme,
                searchTerm,
                setSearchTerm
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
