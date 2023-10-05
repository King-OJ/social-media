import { useLoaderData, useNavigation } from "react-router-dom";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import customFetch from "../../utilities/customFetch";
import { toast } from "react-toastify";

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
      return null;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
    
  }
  else if(intent === "addComment"){
    console.log(data);
    return data
  }

}

export default function PostFeeds() {

  const { posts } = useLoaderData()

  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (

    <section className="relative md:col-span-2">
      <CreatePost />
      {isPageLoading ?
        <div>Loading</div>
        :
        posts.length < 1 ?
        <div className="md:space-y-8 mt-6 text-center">There are no posts to display. Add friends to see their posts.</div>
        :
        <Posts posts={posts} />
      }
    </section>
  )
}
