import CreatePost from "./CreatePost";
import Posts from "./Posts";


export default function PostFeeds() {
  return (
    <section className="relative md:col-span-2">
      <CreatePost />
      <Posts />
    </section>
  )
}
