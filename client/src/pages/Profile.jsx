import { Details, PostFeeds } from "../components";

export default function Profile() {
  return (
    <div className="page">
      <div className="relative grid grid-flow-col md:gap-4 md:grid-cols-3">
        <Details />
        <PostFeeds />
      </div>
    </div>
  )
}
