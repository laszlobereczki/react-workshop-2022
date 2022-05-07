import './App.css';
import React, {useContext, useEffect, useState} from "react";
import Amount from "./components/Amount";
import ThemeContext, {themes} from "./ThemeContext";

function App() {

    const [inputValue, setInputValue] = useState(0);

    const [theme, setTheme] = useState(themes.dark);

    function toggleTheme() {
        setTheme(theme===themes.dark ? themes.light : themes.dark);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setInputValue(0)
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [inputValue]);

    return (
        <ThemeContext.Provider value={theme}>
            <div className={'App ' + theme} style={theme}>
                <button className='themeButton' onClick={toggleTheme} style={{...theme, ...{ position: "absolute", right:"0vh"}}}>light/dark</button>
                <Amount value={inputValue} message="Euro value: "/>
                <Amount value={exchangeRate(inputValue)} message="BTC value: "/>
                <input defaultValue={0} type='number' label="Euros"
                       onChange={(event) => setInputValue(Number(event.target.value))}/>
            </div>
        </ThemeContext.Provider>
    );
}

function exchangeRate(euroValue) {
    return (euroValue * 0.000026).toFixed(6);
}

export default App;

/* Notes:
    <button onChange={event => {setTheme("dark")}}>dark</button>
 */
