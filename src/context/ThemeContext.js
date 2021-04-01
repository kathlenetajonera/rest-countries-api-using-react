import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");

    //sets the theme based on device's theme on initial render
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
        else setTheme("light");
    }, []);

    //updates the theme based on toggle
    useEffect(() => {
        const root = document.querySelector("#root");

        theme === "dark" ? root.classList.add("darkTheme") : root.removeAttribute("class");
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}