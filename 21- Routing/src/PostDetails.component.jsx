import { useParams } from "react-router-dom"

export const  PostDetails = () => {
    const { id: postId } = useParams()
   

    return (
        <div>
            <h1>Post Details</h1>
            <p>Post ID: {postId}</p>
        </div>
    )
    }