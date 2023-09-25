import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function ProfilePic({ img }) {
  return (
    <Link to="/profile" className="h-10 xl:w-14 w-10 xl:h-14 rounded-full overflow-hidden">
        <img src={img} alt="person" className="object-cover h-full w-full" />
    </Link>
  )
}
