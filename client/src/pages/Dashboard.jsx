import { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../../utilities/customFetch";
import { Details,  EditProfileCard,  Navbar, PostFeeds, Suggestions } from "../components";
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useOutletContext } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    const response  = await customFetch.get('/users/suggestedUsers');
    return { user: data.user, members: response.data.users }
  } catch (error) {
    return redirect('/login');
  }
};

export const multiFormActions = async ({ request })=> {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  let intent = formData.get('intent')

  if(intent === "updateProfile"){
    
      try {
      if(data.avatar && data.avatar.size > 500000){
        toast.error("Image size too large, select a different image");
        return null;
      }
      const response = await customFetch.patch('/users/update-profile', formData);
      toast.success(response.data.msg);
      return redirect('/dashboard')
    } catch (error) {
      toast.error(error?.response?.data?.msg)
      return redirect('/dashboard')
    }
    
  }
  else if(intent === "addComment"){
    toast.success("add comment");
    return null;
  }
  
  return null;


}

const DashboardContext = createContext();

export default function Dashboard() {

  const [toggleProfileSettings, isEditingProfile ] = useOutletContext()
  
  const [isAuthError, setIsAuthError] = useState(false);
  const { user, members } = useLoaderData();

  async function followFriend (friend){
    try {
      await customFetch.patch(`/users/follow-user/${friend._id}`)
      toast.success(`You followed ${friend.name}`)
      return null;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    } 
  }

  async function unfollowFriend (friend){
    try {
      await customFetch.patch(`/users/unfollow-user/${friend._id}`)
      toast.success(`You unfollowed ${friend.name}`)
      return null;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    } 
  }

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  const navigate = useNavigate();

  async function logoutUser (){
    navigate("/login")
    await customFetch.get('/auth/logout')
    .then((response)=> {
      toast.error(response?.data?.msg)
    })
  }

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);
 

  return (
    <DashboardContext.Provider value={{
      user,
      members,
      followFriend,
      unfollowFriend, 
      toggleProfileSettings
    }}>
      <Navbar logout={logoutUser}/>
      <div className="page">
        <div className="relative grid grid-flow-col md:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Details />
          <PostFeeds />
          <Suggestions />
        </div>
        <EditProfileCard user ={user} toggleProfileSettings={toggleProfileSettings} isEditingProfile={isEditingProfile} />
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = ()=> useContext(DashboardContext)
