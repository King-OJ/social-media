import posts from "../utils/posts";
import Post from "./Post";

export default function Posts() {
  return (
    <ul className="space-y-4 md:space-y-8 mt-6">
        {
            posts.map((post, index)=> {
                return <Post post={post} key={index} />
            })
        }
        
    </ul>
  )
}
