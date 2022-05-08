import './App.css';
import React, { useState } from "react";
import ThemeContext, {themes} from "./ThemeContext";
import Converter from "./components/Converter";

function App() {
    const [theme, setTheme] = useState(themes.dark);

    function toggleTheme() {
        setTheme(theme===themes.dark ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className={'App ' + theme} style={theme}>
                <button className='themeButton' onClick={toggleTheme} style={{...theme, ...{ position: "absolute", right:"0vh"}}}>light/dark</button>
                <Converter />
                <Converter />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;

/* Notes:
    <button onChange={event => {setTheme("dark")}}>dark</button>

        useEffect(() => {
        let timer = setTimeout(() => {
            setInputValue(0)
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [inputValue]);

 */
