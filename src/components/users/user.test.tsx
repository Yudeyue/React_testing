import { render, screen} from '@testing-library/react'
import { Users } from './users'
import { server } from '../../mocks/server'
import {rest} from 'msw'


describe('Users', () => { 
    test('renders correctly', () => { 
        render(<Users />)
        const userElement = screen.getByRole('heading')
        expect(userElement).toBeInTheDocument()
     })

     test('render a list of users', async () => { 
        render(<Users />)
        const usersElement = await screen.findAllByRole('listitem')
        expect(usersElement).toHaveLength(3)
      })

      test('renders error', async () => { 
        server.use(
            rest.get('http://jsonplaceholder.typicode.com/users', (req, res, ctx)=>{
            return res(ctx.status(500))
            })
        )
        render(<Users />)
        const errorElement = await screen.findByText('Error fetching users')
        expect(errorElement).toBeInTheDocument()
       })
 })