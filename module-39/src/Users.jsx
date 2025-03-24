import { use } from "react"

export default function Users({fetchUsers}){
    const users = use(fetchUsers)
    console.log(users)
    return(
        <>
        <div className="card-user">
        Users: {users.length}
        </div>
        </>
    )
}