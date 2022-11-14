import React, { useState, } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount((oldCount) => {
            return oldCount + 1
        })
    }
   
    const Decrement = () => {
        setCount((oldCount) => {
            return oldCount - 1
       })
    }
    
    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => Increment()}>Increment</button>
        <button onClick={() => Decrement()}>Decrement</button>
        </>
    )
}

export default Counter

