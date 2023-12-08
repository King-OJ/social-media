
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import customFetch from "../../utilities/customFetch";
// import { toast } from "react-toastify";
import { createContext, useContext, useEffect, useState } from "react";
import { useDashboardContext } from "../pages/Dashboard";
import Loader from "./Loader";



const PostFeedContext = createContext();

export default function PostFeeds() {
  
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => 
  
    async()=> {
      setIsLoading(true)
      try {
            const { data } = await customFetch.get('/post');
            setPosts(data.posts)
            console.log(data);
            setIsLoading(false)
          } 
      catch (error) {
        console.log(error);
        setIsLoading(false)
      }
      finally {
        setIsLoading(false)
      }
        }
  , [])
  
  
  const { user }  = useDashboardContext()
 
  return (
    <PostFeedContext.Provider value={{
      user
    }}>
      <section className="relative md:col-span-2">
        <CreatePost />
        {isLoading ?
          <Loader />
          :
          posts.length < 1 ?
          <div className="md:space-y-8 mt-6 text-center">There are no posts to display. Create a post or follow friends to see their posts.</div>
          :
        
          <Posts posts={posts} currentUser={user}/>

        }
      </section>
    </PostFeedContext.Provider>
  )
}

export const usePostFeedContext = () => useContext(PostFeedContext)
