import './App.css';
import React, { useState } from "react";
import ThemeContext, {themes} from "./ThemeContext";
import Converter from "./components/Converter";

function App() {
    const [theme, setTheme] = useState(themes.dark);
    const [premiumCount, setPremiumCount] = useState(0);

    function toggleTheme() {
        setTheme(theme===themes.dark ? themes.light : themes.dark);
    }

    function PremiumAlerter() {
        if (premiumCount === 5)
            alert('Convert without limits by becoming a premium user');
        return null;
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className={'App ' + theme} style={theme}>
                <PremiumAlerter />
                <button className='themeButton' onClick={toggleTheme} style={{...theme, ...{ position: "absolute", right:"0vh"}}}>light/dark</button>
                <Converter premiumCount={premiumCount} setPremiumCount={setPremiumCount}/>
                <Converter premiumCount={premiumCount} setPremiumCount={setPremiumCount}/>
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
