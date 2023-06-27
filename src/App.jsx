import { useEffect, useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'

//normally fetch using Javascript

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(resp => console.log(resp))


//using AXios


function App() {
  const [users,setUsers] = useState([])
  const [name, setName] = useState("")
  const [trigger, setTrigger] = useState(false)

  useEffect(()=>{
    // Axios.get('https://jsonplaceholder.typicode.com/users')
    Axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => setUsers(res.data))
  
  },[])
   
  const postUser = () =>{
    Axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
    .then(res => setUsers([...users, res.data]))
    
  }

  const updateUser = () =>{
    Axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{name:name})
    .then(res => setUsers(res.data))
    
  }

  const deleteUser = () =>{
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
    .then(res => setUsers(res.data))
    
  }
  return (
    <>
        {/* {users.map((e,i)=> {
          return(
            <div key={i}>
              {e.name}
            </div>
          )
        })} */}

 {users.name}

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        {/* <button onClick={()=>postUser()}>POST</button> */}
        {/* <button onClick={()=>updateUser()}>UPDATE</button> */}
        <button onClick={deleteUser}>DELETE</button>
    </>
  )
}



export default App
