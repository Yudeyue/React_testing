import React from "react"
import {useState, useEffect} from "react"


type skillsProps = {
    skills: string[],
}

export const Skills = (props: skillsProps) => {
    const {skills} = props
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
      setTimeout(()=>{
        setIsLoggedIn(true)
      }, 500)
    
      return () => {
      }
    }, [])
    

  return (
    <>
    <ul>
        {
            skills.map(skill=>{
                return <li key={skill}>{skill}</li>
            })
        }
    </ul>
    {
        isLoggedIn? (
            <button>Starting learning</button>
        ) : (
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        )
    }
    </>
  )
}