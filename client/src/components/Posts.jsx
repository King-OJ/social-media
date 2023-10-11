import Post from "./Post";

// eslint-disable-next-line react/prop-types
export default function Posts( { posts, unfollowFriend, user, currentUser }) {
  return (
    <ul className="space-y-4 md:space-y-8 mt-6">
        {
            // eslint-disable-next-line react/prop-types
            posts.map((post)=> {
                return <Post user={post.postedBy || user} currentUser={currentUser} unfollowFriend={unfollowFriend} post={post} key={post._id} />
            })
        }
        
    </ul>
  )
}
