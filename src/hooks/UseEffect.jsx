// Used for controling re-rendering of a component depending on some conditions.
import React from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffect = () => {
    const [numOfTechnologies, setNumOfTechnologies] = useState(10);
    const [databases, setDatabases] = useState(5);
    const handleScaleUp = () => setNumOfTechnologies(numOfTechnologies + 1);
    const handleDatabases = () => setDatabases(databases + 1);

    useEffect(() => {
        console.log("Component re-rendered due to database addition")
    }, [databases])

    return (
        <div className='hook__container'>
            <h3> useEffect Hook - component re-renders only when database addition. </h3>
            <p> I have learnt {numOfTechnologies} technologies. </p>
            <p> I have learnt {databases} databases. </p>
            <Button variant="outlined" size="small" onClick={handleScaleUp}>
                Up Scale!
            </Button>
            <Button variant="outlined" size="small" onClick={handleDatabases}>
                Up Database!
            </Button>
        </div>
    )
}

export default UseEffect