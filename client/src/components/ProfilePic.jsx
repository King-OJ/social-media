import { Link } from "react-router-dom"
// import p2 from '../assets/p2.jpeg' 
// eslint-disable-next-line react/prop-types
export default function ProfilePic({ user, img, currentUser }) {
  
  return (
    // eslint-disable-next-line react/prop-types
    <Link to={`/profile/${user._id}`} state={{ fromHome: { currentUser } }} className="h-10 xl:w-14 w-10 xl:h-14 rounded-full overflow-hidden">
        <img src={img} alt="person" className="object-cover h-full w-full" />
    </Link>
  )
}
