import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}){
    console.log(postsPromise)
    const posts = use(postsPromise)
    return(
        <>
        <h1>{posts.length}</h1>
        {
            posts.map(post=> <Post key={post.id} post={post}></Post>)
        }
        </>
    )
}