// UseMemo & usecallback functionality is almost same. But, useMemo is used when the function has to return something.
import React from 'react'
import { useState, useMemo } from 'react'
import Button from '@mui/material/Button';

function squareNumFunc(num){
    console.log("Squaring called!");
    return Math.pow(num, 2);
} 

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    const squareNum = useMemo(() => {
        return squareNumFunc(number);
    }, [number]);

    return (
        <div className='hook__container'>
            <h3> useMemo - on number increse only component should re-render & not on counter change. </h3>
            <h3> useMemo - [Execution] only used when some action returned by function. </h3>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <div> Square: {squareNum} </div>
            <Button variant="outlined" size="small" onClick={() => setCounter(counter + 1)}>
                Increment Counter
            </Button>
            <div> Counter: {counter} </div>
        </div>
    )
}

export default UseMemo