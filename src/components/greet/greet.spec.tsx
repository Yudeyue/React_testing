import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

// describe.only or describe.skip or test.skip=xit or test.only=fit
describe('Greet', () => {
    it('render correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    it('renders with Yudeyue', () => {
        render(<Greet name='Yudeyue' />)
        const textElement = screen.getByText('Hello Yudeyue')
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {
        it('renders with a name', () => {
            render(<Greet name='Julian' />)
            const textElement = screen.getByText('Hello Julian')
            expect(textElement).toBeInTheDocument()
        })
    })

})
