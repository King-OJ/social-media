import { MdPersonRemove} from 'react-icons/md'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { EditProfileCard, Navbar, ProfilePostFeeds } from "../components";
import customFetch from "../../utilities/customFetch";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { MdArrowBack, MdEdit } from "react-icons/md";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import p1 from '../assets/p1.jpeg'
import FriendsList from '../components/FriendsList';


const ProfileContext = createContext();

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/profile/${params.id}`);
    const response = await customFetch.get(`/post/${params.id}`);
    return { profileOwner: data.user, posts: response.data.posts }
  } catch (error) {
    return error;
  }
};

export default function Profile() {

  const location = useLocation();
  const { fromHome } = location.state;
  const { currentUser } = fromHome
  const { profileOwner, posts } = useLoaderData();
  
  const [isAuthError, setIsAuthError] = useState(false);
  const [toggleProfileSettings, isEditingProfile ] = useOutletContext()

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
      toast.success(response?.data?.msg)
    })
  }

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  return (
    <ProfileContext.Provider value={{
      user: profileOwner,
      posts
    }}>
    <Navbar logout={logoutUser}/>
    <div className="page">
      <div className="flex items-center">
        <button onClick={()=> navigate(-1) } className='border-[1px] p-1 border-primary500 rounded-full'>
          <MdArrowBack size={23} />
        </button>
        <h3 className="font-bold flex-1  text-center">{currentUser._id === profileOwner._id ? `My profile` : `${profileOwner.name}'s profile`}</h3>
        
      </div>
    
      <div className="my-6 flex flex-col items-center">
        <div className="h-40 md:h-64 lg:h-80 w-40 md:w-64 lg:w-80 rounded-full overflow-hidden">
          <img src={p1} alt="" className="w-full max-w-lg max-h-auto object-contain" />
        </div>
        {
          currentUser._id === profileOwner._id &&
          <button className="mt-2 text-sm flex items-center space-x-3">
          <span>Profile Picture</span> 
          <MdEdit />
          </button>
          }
      </div>

      <div className="space-y-2 text-center">
        <h4 className="text-sm lg:text-xl font-semibold">{`${profileOwner.job}`}</h4>
        <h5 className="text-sm lg:text-xl font-semibold">{`${profileOwner.location}`}</h5>
        <div className="flex items-center divide-x-2 justify-center">
          <div className="pr-8 ">
            <div>{profileOwner.friends.length}</div>
            <div>Followers</div>
          </div>
          <div className="px-8 ">
            <div>256</div>
            <div>Following</div>
          </div>
          <div className="pl-8 ">
            <div>{posts.length}</div>
            <div>All Posts</div>
          </div>
        </div>
      </div>

      <ul className="flex justify-center space-x-6 items-center mt-6 text-3xl">
        <li>
          <a href="#"><FaFacebook/></a>
        </li>
        <li>
          <a href="#"><FaTwitter /></a>
        </li><li>
          <a href="#"><FaInstagram/></a>
        </li>
      </ul>
      
      <div className="flex flex-col space-y-2 items-center mt-4">
         { currentUser._id == profileOwner._id ?
        <button onClick={()=>toggleProfileSettings()} className="bg-primary600 text-grey0 w-full max-w-xs my-2 py-1 rounded-md font-semibold">Edit profile</button>
          :
          <>
          <button className="bg-primary600 w-full max-w-xs py-1 rounded-md font-semibold">{currentUser.friends.find((friend)=> friend === profileOwner._id) ? "Unfollow" : "Follow"}</button>
          <button className="bg-primary600 w-full max-w-xs py-1 rounded-md font-semibold">Message</button>
          </>
          }
      </div>

      <div className="w-full max-w-2xl mx-auto my-16">
        <ul className="border-b-[1px] flex justify-between mb-1 mx-2 md:mx-0 text-sm font-semibold">
          <li>
            <button className="text-primary500">All posts</button>
          </li>
          <li>
            <button>Photos</button>
          </li>
          <li>
            <button>Videos</button>
          </li>
        </ul>
      </div>

      <div className="grid grid-flow-col gap-4 col-span-3 my-16">
        <div className=" md:col-span-1 self-start bg-grey10 dark:bg-grey800 shadow-lg rounded-md">
          <h6 className="py-4 px-3 text-base font-bold">{currentUser._id === profileOwner._id ? "Your Friends" : `${profileOwner.name}'s Friends`}</h6>
          {profileOwner.friends.length > 0 ? 
          <FriendsList friends={profileOwner.friends} currentUser={profileOwner._id === currentUser._id ? currentUser : profileOwner} icon={<MdPersonRemove />}/> 
            :
          <div>{`${profileOwner._id === currentUser._id ? currentUser.name : profileOwner.name} Has not made friends yet.`}</div>
        }
        </div>
        <div className="md:col-span-2">
          <ProfilePostFeeds />
        </div>
      </div>

      <EditProfileCard user={currentUser} toggleProfileSettings={toggleProfileSettings} isEditingProfile={isEditingProfile}/>
    </div>
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)