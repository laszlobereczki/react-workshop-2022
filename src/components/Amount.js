import React from 'react';

export default function Amount(props) {
    const myStyle = (props.value < 0) ? {color: "red"} : {color: "black"}
    return <p style={myStyle}>{props.message}{props.value}</p>;
}