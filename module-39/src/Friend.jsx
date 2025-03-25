
export default function Friend({friend}){
    // console.log(friend)
    const {name, username,email} = friend
return(
    <div className="card">
        Name:{name} <br /> 
        Username:{ username} <br />
        Email:{email}

    </div>
)
}