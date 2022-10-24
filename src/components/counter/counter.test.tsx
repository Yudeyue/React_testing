import { getByRole, render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import {Counter} from './counter'


describe('Counter', ()=>{
    test('render correctly', () => { 
        render(<Counter />)
        const counterHeadingElement = screen.getByRole('heading')
        expect(counterHeadingElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(buttonElement).toBeInTheDocument()
    })

    test('render a count of 0', () => { 
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
     })

     test('renders a count of 1 after clicking Increment button', async () => { 
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
     })

     test('renders a count of 2 after clicking Increment button 2 times', async () => { 
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.dblClick(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
      })

      test('renders a pointer', async () => { 
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.pointer({keys: '[MouseLeft]'})
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
       })

       test('renders a count of 10 after clicking set button', async () => { 
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const setButtonElement = screen.getByRole('button', {name: 'Set'})
        await user.click(setButtonElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
        })

        test('elements are focused in the right order', async () => { 
            user.setup()
            render(<Counter />)
            const amountElement = screen.getByRole('spinbutton')
            const setButtonElement = screen.getByRole('button', {name: 'Set'})
            const incrementButtonElement = screen.getByRole('button', {name: 'Increment'})
            await user.tab()
            expect(incrementButtonElement).toHaveFocus
            await user.tab()
            expect(amountElement).toHaveFocus()
            await user.tab()
            expect(setButtonElement).toHaveFocus()
         })
})