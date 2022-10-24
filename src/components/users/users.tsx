import {useState, useEffect} from 'react'

export const Users = () => {
    const [users, setUsers] = useState<String[]>([])
    const [error, setError] = useState<String | null>(null)
    useEffect(() => {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUsers(data.map((user: {name: String})=>user.name)))
        .catch(()=>setError('Error fetching users'))
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <h1>Users</h1>
        {error && <p>{error}</p>}
        <ul>
            {
                users.map(user=>(
                    <li key={user}>{user}</li>
                ))
            }
        </ul>
    </div>
  )
}
