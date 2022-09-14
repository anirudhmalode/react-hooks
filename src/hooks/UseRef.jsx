import React, { useRef, useEffect } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); // setting focus on current ref.
    });

  return (
    <div className="hook__container">
      <h3>UseRef Hook -Allows us to resuse values between renders</h3>

      <input ref={inputRef} type="text" />
    </div>
  )
}

export default UseRef