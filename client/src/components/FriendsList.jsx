import { Link } from "react-router-dom"
import ProfilePic from "./ProfilePic"

// eslint-disable-next-line react/prop-types
export default function FriendsList({ friends, followFriend, currentUser}) {
 
  return (
    <ul>
            {
              // eslint-disable-next-line react/prop-types
              friends.map((friend)=> {

                // eslint-disable-next-line react/prop-types
                const isFriendOfCurrentUser = currentUser.friends.find((user) => user === friend._id)

                return <li key={friend._id} className="px-3 flex items-center justify-between py-4 hover:bg-grey100 hover:dark:bg-grey700">
                          <div className="space-x-2 flex items-center">
                            <ProfilePic img={friend.location} user={friend} currentUser={currentUser}/>
                            <div className="space-y-1">
                              <Link to={`/profile/${friend._id}`} state={{ fromHome: { currentUser } }} className="text-sm font-bold">{friend.name}</Link>
                              <h6 className="capitalize text-sm text-grey500 dark:text-grey200">{friend.location}</h6>
                            </div>
                          </div>
                          
                          { 
                          
                          // eslint-disable-next-line react/prop-types
                          currentUser.role !== 'admin' &&
                            
                              <button onClick={()=>followFriend(friend)} className="ml-1">
                                <span className={!isFriendOfCurrentUser ? 
                                "font-semibold text-xs md:text-sm bg-primary600 text-grey0 shadow-sm rounded-full px-2 py-1 capitalize"
                                :
                                "border border-primary600 px-2 py-1 capitalize rounded-full text-xs md:text-sm font-semibold"}>{isFriendOfCurrentUser ? "unfollow" : "follow"}</span>
                              </button>
                            
                            }
                        </li>
                      
               
              })
            }
            
          </ul>
  )
}
