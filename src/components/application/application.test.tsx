
import { render, screen} from "@testing-library/react";
import { Application } from "./application";


describe('Application', ()=>{

    test('renders correctly', () => { 
        render(<Application />)
        const pageHeadingElement = screen.getByRole('heading', {
           level: 1, //name: 'Job application form'
        })
        expect(pageHeadingElement).toBeInTheDocument()

        const sectionHeadingElement = screen.getByRole('heading', {
            level: 2, //name: 'Section 1'
        })
        expect(sectionHeadingElement).toBeInTheDocument()

        const paragramElement = screen.getByText('All fields are mandatory')
        expect(paragramElement).toBeInTheDocument()

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()

        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument()

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue('Yudeyue')
        expect(nameElement4).toBeInTheDocument()

        const textareaElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(textareaElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        const termElement = screen.getByRole('checkbox')
        expect(termElement).toBeInTheDocument()

        const termElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termElement2).toBeInTheDocument()

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).not.toBeEnabled()    
    })
})