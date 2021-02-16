import React, { useState } from 'react'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes"
import  Toggle  from "./Toggler"

export const Header = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <>
        <div className="header">
            <div><h1>Expense Tracker</h1></div>
            <div className="theme">
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <Toggle theme={theme} toggleTheme={themeToggler}/>
            </ThemeProvider>
            </div>
            
        </div> 
        
        </>
    )
}
