import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayNumber = () => {
    const { num } = useParams();
    return isNaN(num) ? <h1>{num}</h1> : <h1>{num}</h1>;
};

export default DisplayNumber;
