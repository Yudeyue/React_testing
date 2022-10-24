import React from 'react'

type Props = {
    count: number,
    handleIncrement: ()=>{},
    handleDecrement: ()=>{}
}

export const CounterTwo = (props: Props) => {
  return (
    <div>
        <h1>Counter two</h1>
        <p>{props.count}</p>
        {
            props.handleIncrement && (<button onClick={props.handleIncrement}>Increment</button>)
        }
        {
            props.handleDecrement && (<button onClick={props.handleDecrement}>Decrement</button>)
        }
    </div>
  )
}