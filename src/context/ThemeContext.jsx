import React, { createContext, useEffect, useState } from 'react'


export const ThemeContext = createContext()


export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState(() => {
const saved = localStorage.getItem('theme')
return saved || 'light'
})


useEffect(() => {
const root = window.document.documentElement
if (theme === 'dark') root.classList.add('dark')
else root.classList.remove('dark')
localStorage.setItem('theme', theme)
}, [theme])


const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))


return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}