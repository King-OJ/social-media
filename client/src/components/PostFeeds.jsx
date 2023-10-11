import { redirect, useLoaderData, useNavigation, useOutletContext } from "react-router-dom";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import customFetch from "../../utilities/customFetch";
import { toast } from "react-toastify";
import { createContext, useContext } from "react";

export const loader = async ()=> {
  try {
    const { data } = await customFetch.get('/post');
    // console.log(data.posts);
    return data;
  } catch (error) {
    console.log(error);
  }
  return null
}

export const actions = async ({ request })=> {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  let intent = formData.get('intent')
  if(intent === "createPost"){
    const { caption } = data
    try {
      await customFetch.post('/post', {caption} )
      toast.success("Post created!")
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
    
  }
  else if(intent === "unfollowFriend"){
    // toast.success("unfollow friend");
    return redirect('/dashboard');
  }
}

const PostFeedContext = createContext();

export default function PostFeeds() {
  const user  = useOutletContext()
  const { posts } = useLoaderData()
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
 
  return (
    <PostFeedContext.Provider value={{
      user
    }}>
      <section className="relative md:col-span-2">
        <CreatePost />
        {isPageLoading ?
          <div>Loading</div>
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
