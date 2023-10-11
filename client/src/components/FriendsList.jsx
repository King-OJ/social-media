import { Form, Link } from "react-router-dom"
import ProfilePic from "./ProfilePic"

// eslint-disable-next-line react/prop-types
export default function FriendsList({ friends, icon, followFriend, currentUser}) {
  return (
    <ul>
            {
              // eslint-disable-next-line react/prop-types
              friends.map((friend)=> {
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
                            <Form  method="post">
                              <button onClick={()=>followFriend(friend)} name="intent" value="followFriend" className="ml-1 flex flex-col items-center">
                                <span className="text-base text-grey0 p-[6px] bg-primary600 rounded-full">
                                  {icon}
                                </span>
                                <span className="mt-1 text-xs">Follow</span>
                              </button>
                            </Form>
                            }
                        </li>
                      
               
              })
            }
            
          </ul>
  )
}
