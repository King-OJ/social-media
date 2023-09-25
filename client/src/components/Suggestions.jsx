import postImg from "../assets/info2.jpeg"
import friendsSuggestions from "../utils/friends"
import { MdPersonAdd} from 'react-icons/md'
import FriendsList from "./FriendsList"
import Adverts from "./Adverts"

export default function Suggestions() {

  return (
    <aside className="hidden lg:block"> 
      <div className="sticky top-28">
        <Adverts img={postImg} />

        <div className="mt-6 bg-grey10 dark:bg-grey800 shadow-lg rounded-md p-3 space-y-4 w-full">
          <h6 className="text-base font-bold">People you may know</h6>
          <FriendsList friends={friendsSuggestions} icon={<MdPersonAdd />} />
        </div>
      </div>
    </aside>
  )
}
