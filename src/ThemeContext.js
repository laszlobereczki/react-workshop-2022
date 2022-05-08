import { createContext } from "react";

export const themes = {
    dark: {
        color: "#ECB365",
        background: "#041C32"
    },
    light: {
        color: "#041C32",
        background: "#ECB365"
    }
};

export const ThemeContext = createContext(themes.dark);
export default ThemeContext;
