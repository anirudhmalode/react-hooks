// UseMemo & usecallback functionality is almost same. But, useCallback is used when the function has to only operations.

import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useCallback } from 'react';

const action = new Set();

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number]);

    const decrementNumber = useCallback(() => {
        setNumber(number - 1)
    }, [number])

    const incrementCounter = useCallback(() => {
        setCounter(counter + 1)
    }, [counter]);
    // By using callback these are added accordingly --> On number 2 or On Counter 1
    action.add(incrementNumber);
    action.add(decrementNumber);
    action.add(incrementCounter);
    alert(action.size);

    return (
        <div className='hook__container'>
            <h3> useCallback - [Only perform] only used when some action has to be done by function <i>Nothing to return</i> </h3>
            <div> Counter: {counter} </div>
            <div> Number: {number} </div>
            <Button variant="outlined" size="small" onClick={incrementNumber}>
                Increment Number
            </Button>
            <Button variant="outlined" size="small" onClick={decrementNumber}>
                Decrement Number
            </Button>
            <Button variant="outlined" size="small" onClick={incrementCounter}>
                Increment Counter
            </Button>
        </div>
    )
}

export default UseCallback