import React from 'react'

export default function Counter({ count, ...props }) {
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => props.incrementAction()}>+</button>
                <button onClick={() => props.decrementAction()}>-</button>
            </div>
        </div>
    )
}
