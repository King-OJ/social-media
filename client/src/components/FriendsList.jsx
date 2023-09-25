import ProfilePic from "./ProfilePic"

// eslint-disable-next-line react/prop-types
export default function FriendsList({ friends, icon}) {
  return (
    <ul className="mt-6">
            {
              friends.map((friend)=> {
                return <li key={friend.id} className="flex items-center justify-between py-4">
                  <div className="space-x-2 flex items-center">
                    <ProfilePic img={friend.profilePic}/>
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold">{friend.name}</h5>
                      <h6 className="text-sm text-grey500 dark:text-grey200">{friend.job}</h6>
                    </div>
                  </div>

                  <button className="ml-1 text-xl text-grey0 xl:text-2xl p-1 lg:p-2 bg-primary600 rounded-full">
                    {icon}
                  </button>
                </li>
              })
            }
            
          </ul>
  )
}
