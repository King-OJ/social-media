import ProfilePic from "./ProfilePic"
import { MdImage, MdVideoFile, MdAttachment, MdAudioFile } from 'react-icons/md'
import { Form, useNavigation } from "react-router-dom"
import { useProfileContext } from "../pages/Profile"

export default function CreatePostOnProfile() {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting';
    const { user } = useProfileContext()
  return (
    <Form method="post" className="sticky top-16 md:top-28 bg-grey10 px-4 dark:bg-grey800 shadow-lg rounded-md divide-y-[1px]">
        <div className="py-3 md:py-5 flex items-center space-x-3">
            <ProfilePic user={user} img={user.avatar}/>
            <input name="caption" type="text" className="flex-1 p-2 pl-3 text-sm md:text-base rounded-full outline-none dark:bg-grey700 dark:text-grey0 text-grey1000" placeholder="Whats on your mind?"/>
        </div>

        <div className="py-4">
            <ul className="flex items-center justify-between pb-4">
                <li>
                    <button className="flex flex-col items-center space-y-1">
                        <MdImage />
                        <span className="text-sm">Image</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center space-y-1">
                        <MdVideoFile />
                        <span className="text-sm">Video</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center space-y-1">
                        <MdAttachment />
                        <span className="text-sm">Attachment</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center space-y-1">
                        <MdAudioFile />
                        <span className="text-sm">Audio</span>
                    </button>
                </li>
            </ul>
            <div className="flex justify-end">
                <button type="submit" disabled={isSubmitting} name="intent" value="createPost" className={isSubmitting ? "text-grey0 cursor-wait shadow-lg bg-primary600 rounded-full px-4 py-[2px] font-semibold": "text-grey0 shadow-lg bg-primary600 rounded-full px-4 py-[2px] font-semibold"}>{isSubmitting ? "Posting" : "Post"}</button>
            </div>
        </div>

    </Form>
  )
}
