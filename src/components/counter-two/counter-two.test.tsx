import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import user from '@testing-library/user-event'


describe('CounterTwo', ()=>{
    test('render correctly', () => { 
        render(<CounterTwo count={0}/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
     })

     test('handlers are called', async () => { 
        user.setup()
        const incrementHandler = jest.fn()
        const decrementhandler = jest.fn()
        render(<CounterTwo count={0}
            handleDecrement={decrementhandler}
            handleIncrement={incrementHandler}
        />)
        const incrementButtonElement = screen.getByRole('button', {name: 'Increment'})
        const decrementButtonElement = screen.getByRole('button', {name: 'Decrement'})
        
        await user.click(incrementButtonElement)
        await user.click(decrementButtonElement)
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementhandler).toHaveBeenCalledTimes(1)
    })
})