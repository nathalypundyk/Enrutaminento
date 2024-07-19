import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayStyledWord = () => {
    const { word, textColor, bgColor } = useParams();
    const style = {
        color: textColor,
        backgroundColor: bgColor,
        padding: '10px'
    };
    return <h1 style={style}>{word}</h1>;
};

export default DisplayStyledWord;
