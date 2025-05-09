
import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Cricket from './Cricket'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Todos from './Todos'
import Albums from './Albums'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response=>response.json())

const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}                  

const fetchPosts = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}
 const fetchTodos= async()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
   return response.json();
 }

 const fetchAlbums= async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  return response.json();
 }

function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
  const todosPromise = fetchTodos();
  const albumsPromise = fetchAlbums();

  const handleClick=()=>{
  alert('Click me !!! I am react function ')
  }

  const handleClick2=(num)=>{
    const newNum = num+5
    alert(newNum)
       
  }

  return (
    <>
    {/* <Suspense fallback={<h1>Posts Loading...</h1>}>
      <Posts postsPromise={postsPromise}></Posts>
    </Suspense> */}

    {/* <Suspense fallback={<h1>Loading...</h1>}>
    <Users fetchUsers={fetchUsers}></Users>
    </Suspense> */}

    {/* <Suspense fallback={<h2>Waiting for treat</h2>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense> */}

   {/* <Suspense fallback={<h2>Todos coming</h2>}>
     <Todos todosPromise={todosPromise}></Todos>
   </Suspense> */}
   
   <Suspense fallback={<h3>Albums Data Coming</h3>}>
    <Albums albumsPromise={albumsPromise}></Albums>
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
