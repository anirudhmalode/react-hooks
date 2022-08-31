import React from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

const UseState = () => {
    const [numOfTechnologies, setNumOfTechnologies] = useState(10);
    const handleScaleUp = () => setNumOfTechnologies(numOfTechnologies + 1);
    return (
        <div className='hook__container'>
            <h3> useState Hook </h3>
            <p> I have learnt {numOfTechnologies} technologies. </p>
            <Button variant="outlined" size="small" onClick={handleScaleUp}>
                Up Scale!
            </Button>
        </div>
    )
}

export default UseState