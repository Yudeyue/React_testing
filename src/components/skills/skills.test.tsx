import {getByRole, render, screen, logRoles} from '@testing-library/react'
import { Skills } from './skills'


describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'Javascript']

    test('Render correctly', () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('Render a list', () => { 
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
     })

     test('Renders Login button', () => { 
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
      })

      test('Start learning button', () => { 
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {
            name: 'Starting learning'
        })
        expect(startLearningButton).not.toBeInTheDocument()
       })

       test('Starting learning button is eventually displayed', async () => { 
        const view = render(<Skills skills={skills} />)
        logRoles(view.container) // debug
        // screen.debug()
        const startinglearningButton2 = await screen.findByRole('button', {
            name: 'Starting learning'
        },
        {
            timeout: 1000
        }
        )
        // screen.debug()
        expect(startinglearningButton2).toBeInTheDocument()
        })
})