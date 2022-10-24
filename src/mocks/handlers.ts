import {rest} from 'msw'


export const handlers = [
    rest.get('http://jsonplaceholder.typicode.com/users', (req, res, ctx)=>{
        return res(ctx.status(200),
        ctx.json([
            {name: 'Bruce Wayne'},{name: 'Bruce Wayne'},{name: 'Bruce Wayne'}
        ]))
        
    })
]

