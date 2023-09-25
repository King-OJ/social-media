import ProfilePic from "./ProfilePic"
import personImg from "../assets/p1.jpeg"
import { MdImage, MdVideoFile, MdAttachment, MdAudioFile } from 'react-icons/md'

export default function CreatePost() {
  return (
    <div className="sticky top-16 md:top-28 bg-grey10 px-4 dark:bg-grey800 shadow-lg rounded-md divide-y-[1px]">
        <div className="py-3 md:py-5 flex items-center space-x-3">
            <ProfilePic img={personImg}/>
            <input type="text" className="flex-1 p-2 text-sm md:text-base rounded-full outline-none dark:bg-grey700 dark:text-grey0 text-grey1000" placeholder="Whats on your mind?"/>
        </div>

        <ul className="flex items-center justify-between py-3 md:py-5">
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
    </div>
  )
}
