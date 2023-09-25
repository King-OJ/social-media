import { Details, PostFeeds, Suggestions } from "../components";


export default function Home() {
  return (
    <div className="page">
      <div className="relative grid grid-flow-col md:gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Details />
        <PostFeeds />
        <Suggestions />
      </div>
    </div>
  )
}
