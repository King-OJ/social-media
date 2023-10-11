import { redirect, useNavigation } from "react-router-dom";
import Posts from "./Posts";
import customFetch from "../../utilities/customFetch";
import { toast } from "react-toastify";
import CreatePostOnProfile from "./CreatePostOnProfile";
import { useProfileContext } from "../pages/Profile";



export const actions = async ({ request })=> {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  let intent = formData.get('intent')
  if(intent === "createPost"){
    const { caption } = data
    try {
      await customFetch.post('/post', {caption} )
      toast.success("Post created!")
      return null;
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

export default function ProfilePostFeeds() {

  const { posts, user } = useProfileContext()
 
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (

    <section className="relative md:col-span-2">
      <CreatePostOnProfile />
      {isPageLoading ?
        <div>Loading</div>
        :
        posts.length < 1 ?
        <div className="md:space-y-8 mt-6 text-center">{`${user.name} hasn't posted yet.`}</div>
        :
        <Posts posts={posts} user={user}/>
      }
    </section>
  )
}
