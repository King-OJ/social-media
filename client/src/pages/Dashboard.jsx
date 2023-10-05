import { createContext, useContext } from "react";
import customFetch from "../../utilities/customFetch";
import { Details,  Navbar,  Suggestions } from "../components";
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    const response  = await customFetch.get('/users/allUsers');
    return { user: data.user, members: response.data.users }
  } catch (error) {
    return redirect('/');
  }
};


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

  async function followFriend (){
    navigate("/login")
    await customFetch.get('/auth/logout')
    .then((response)=> {
      toast.success(response?.data?.msg)
    })
  }

  return (
    <DashboardContext.Provider value={{
      user,
      members,
      logout
    }}>
      <Navbar />
      <div className="page">
        <div className="relative grid grid-flow-col md:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Details />
          <Outlet />
          <Suggestions />
        </div>
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = ()=> useContext(DashboardContext)
