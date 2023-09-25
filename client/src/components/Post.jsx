/* eslint-disable react/prop-types */
import { MdPersonRemove, MdShare, MdComment, MdThumbUp, MdSend } from 'react-icons/md'
import ProfilePic from './ProfilePic'

export default function Post({ post }) {

  return <li className="p-3 rounded-md shadow-md space-y-2 md:space-y-4 bg-grey10 dark:bg-grey800">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                    <ProfilePic img={post.authorProfilePic}/>
                    <h5 className="text-sm font-bold">{post.author}</h5>
                </div>

                <button className="ml-1 text-xl text-grey0 xl:text-2xl p-1 lg:p-2 bg-primary600 rounded-full">
                    <MdPersonRemove />
                </button>
            </div>

            <p className='text-sm lg:text-base'>{post.postDetail}</p>

            <div className="">
                <img src={post.postImage} alt="posts" className='object-cover object-center max-h-[28rem] w-full' />
            </div>

            <div className="flex items-center space-x-2">
                
                <div className="flex items-center space-x-1">
                    <button>
                        <MdThumbUp size={18} />
                    </button>
                    <span className='text-xs'>{post.likes}</span>
                </div>
                                
                <div className="flex items-center space-x-1">
                    <button>
                        <MdComment size={18} />
                    </button>
                    <span className='text-xs'>{post.comments}</span>
                </div>
                                
                <div className="hidden md:flex rounded-full flex-1 bg-grey100 bg-opacity-60 dark:bg-grey700 ml-4 self-stretch overflow-hidden items-center">
                    <input type="text" placeholder='Leave a comment...' className="dark:caret-primary500 flex-1 outline-none px-3 h-full bg-transparent placeholder:text-xs placeholder:md:text-sm" />
                    <button className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                        <MdSend size={18}/>
                    </button>
                </div>

                <button className='ml-2 p-1 rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                    <MdShare size={18} />
                </button>
            </div>
        </li>
}
