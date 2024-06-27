import React, { useEffect, useState } from 'react'

export const useDarkmode = () => {
    const [ theme, setTheme ] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(()=> {
        const root = window.document.documentElement
        console.log(root, theme)
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])
  return [colorTheme,setTheme]
}