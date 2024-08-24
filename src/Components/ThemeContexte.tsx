// context/CartContext.js
"use client"
import { createContext, ReactNode, useState, useContext, useEffect, Dispatch, SetStateAction, useLayoutEffect } from 'react';


interface IToggleSwitchTheme {

    setTheme: Dispatch<SetStateAction<string>>;
    theme: string;
    handleThemeSwitch:()=>void
}



export const ThemeSwitcherContext = createContext<IToggleSwitchTheme>({
    theme: "dark",
    setTheme: () =>{},
    handleThemeSwitch:()=>{}
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>("");

    useLayoutEffect(() => {
      // Get saved theme from localStorage and set it to state
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);
    
    useEffect(() => {
      // Update the document body class based on the theme
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      // Save the theme to localStorage
      localStorage.setItem('theme', theme);
    }, [theme]);
    
      const handleThemeSwitch = () => {
        setTheme(((theme:string)=>theme === "dark" ? "light" : "dark"));
      };
    
      console.log(document.documentElement.classList);

    return (
        <ThemeSwitcherContext.Provider value={{ setTheme, theme ,handleThemeSwitch}}>
            {children}
        </ThemeSwitcherContext.Provider>
    );
};



export function useThemeSwitcher() {
    return useContext(ThemeSwitcherContext);
}