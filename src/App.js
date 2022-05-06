import './App.css';
import React, {useEffect, useState} from "react";
import Amount from "./components/Amount";
import {ThemeContext, themes} from "./ThemeContext";

function App() {

    const [inputValue, setInputValue] = useState(0);
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
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
        <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            <div className="App">
                <Amount value={inputValue} message="Euro value: "/>
                <Amount value={exchangeRate(inputValue)} message="BTC value: "/>
                <input defaultValue={0} type='number' label="Euros"
                       onChange={(event) => setInputValue(Number(event.target.value))}/>
                <button onChange={event => {setTheme("dark")}}>dark</button>
            </div>
        </ThemeContext.Provider>
    );
}

function exchangeRate(euroValue) {
    return (euroValue * 0.000026).toFixed(6);
}

export default App;
