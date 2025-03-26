import './App.css'

export default function({post}){
    return(
        <div className="card">
            <h4>{post.title}</h4>
            <h5>{post.body}</h5>
            
        </div>
    )
}