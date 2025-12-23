import { createContext, useContext } from "react";

export const themeContext = createContext({
    theme: "light",
    themeMode: () => {}
});

export const ThemeProvider = themeContext.Provider

export default function useTheme() {
    return useContext(themeContext)
}


// Creating context for theme
