import ProfilePic from "./ProfilePic"

// eslint-disable-next-line react/prop-types
export default function FriendsList({ friends, icon}) {
  return (
    <ul className="mt-6">
            {
              // eslint-disable-next-line react/prop-types
              friends.map((friend)=> {
                return <li key={friend._id} className="flex items-center justify-between py-4">
                  <div className="space-x-2 flex items-center">
                    {/* <ProfilePic img={member.profilePic}/> */}
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold">{friend.name}</h5>
                      <h6 className="capitalize text-sm text-grey500 dark:text-grey200">{friend.location}</h6>
                    </div>
                  </div>

                  <button className="ml-1 flex flex-col items-center">
                    <span className="text-base text-grey0 p-[6px] bg-primary600 rounded-full">
                      {icon}
                    </span>
                    <span className="mt-1 text-xs">Follow</span>
                  </button>
                </li>
              })
            }
            
          </ul>
  )
}
