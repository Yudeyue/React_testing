import { render, screen } from "@testing-library/react"
import { Greet } from "../components/greet/greet"

// describe.only or describe.skip
describe('Greet', () => {
    test.skip('render correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })

    test('renders with Yudeyue', () => {
        render(<Greet name='Yudeyue' />)
        const textElement = screen.getByText('Hello Yudeyue')
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {
        test.only('renders with a name', () => {
            render(<Greet name='Julian' />)
            const textElement = screen.getByText('Hello Julian')
            expect(textElement).toBeInTheDocument()
        })
    })

})
