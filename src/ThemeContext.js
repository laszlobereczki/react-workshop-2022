import { createContext } from "react";

export const themes = {
    light: {
        foreground: '#b82a2a',
        background: '#244f71',
    },
    dark: {
        foreground: '#5ccb43',
        background: '#149c9c',
    },
};

export const ThemeContext = createContext( {
    theme: themes.dark,
    changeTheme: () => {},
});
