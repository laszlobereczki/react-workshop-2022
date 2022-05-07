import React, {useContext} from 'react';
import ThemeContext from "../ThemeContext";

export default function Amount(props) {

    const theme = useContext(ThemeContext);
    const myStyle = (props.value < 0) ? {color: "red"} : {color: theme.color}

    return (
        <p style={{...myStyle}}>{props.message}{props.value}</p>
    );
}


/* Notes:
    return <p className={theme} style={myStyle}>{props.message}{props.value}</p>;
    <p className={theme.theme + ' ' + myStyle} >{props.message}{props.value}</p>
    <p>{JSON.stringify(theme)}</p>
    <p style={{...theme, ...myStyle }}>{props.message}{props.value}</p>
 */
