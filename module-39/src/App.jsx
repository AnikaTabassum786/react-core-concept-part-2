
import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Cricket from './Cricket'
import Users from './Users'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response=>response.json())

const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}                  

function App() {

  const friendsPromise = fetchFriends();

  const handleClick=()=>{
  alert('Click me !!! I am react function ')
  }

  const handleClick2=(num)=>{
    const newNum = num+5
    alert(newNum)
       
  }

  return (
    <>
    {/* <Suspense fallback={<h1>Loading...</h1>}>
    <Users fetchUsers={fetchUsers}></Users>
    </Suspense> */}

    <Suspense fallback={<h2>Waiting for treat</h2>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>


    <Cricket></Cricket>
    <Counter></Counter>
      <h1>Vite + React</h1>
      


      {/* <button onclick="handleClick()">JS</button> <br /> <br /> */}

      {/* React */}
      <button onClick={handleClick}>Click me</button> <br /> <br />
      <button onClick={()=>handleClick2(5)}>Click me too </button>
    </>
  )
}

export default App
