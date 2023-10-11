import { createContext, useContext } from "react";
import customFetch from "../../utilities/customFetch";
import { Details,  Navbar,  Suggestions } from "../components";
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    const response  = await customFetch.get('/users/suggestedUsers');
    return { user: data.user, members: response.data.users }
  } catch (error) {
    return redirect('/');
  }
};

export const multiFormActions = async ({ request })=> {

  const formData = await request.formData();
  let intent = formData.get('intent')
  if(intent === "followFriend"){
    // toast.success("unfollow friend");
    return null;
  }
  else if(intent === "addComment"){
    toast.success("add comment");
    return null;
  }
  

}

const DashboardContext = createContext();

export default function Dashboard() {

  const { user, members } = useLoaderData();
  
  const navigate = useNavigate();

  async function logout (){
    navigate("/login")
    await customFetch.get('/auth/logout')
    .then((response)=> {
      toast.success(response?.data?.msg)
    })
  }

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

  return (
    <DashboardContext.Provider value={{
      user,
      members,
      followFriend,
      unfollowFriend,
    }}>
      <Navbar logout={logout}/>
      <div className="page">
        <div className="relative grid grid-flow-col md:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Details />
          <Outlet context={ user }/>
          <Suggestions />
        </div>
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = ()=> useContext(DashboardContext)
