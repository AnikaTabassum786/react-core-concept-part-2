import { use } from "react"
import Album from "./Album"

export default function Albums({albumsPromise}){
    console.log(albumsPromise)
    const albums=use(albumsPromise)
    return(
        <>
        <h1>Albums</h1>
        {albums.map(album=><Album album={album}></Album>)}
        </>
    )
}