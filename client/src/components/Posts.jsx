import Post from "./Post";

// eslint-disable-next-line react/prop-types
export default function Posts( { posts }) {
  return (
    <ul className="space-y-4 md:space-y-8 mt-6">
        {
            // eslint-disable-next-line react/prop-types
            posts.map((post)=> {
                return <Post post={post} key={post._id} />
            })
        }
        
    </ul>
  )
}
