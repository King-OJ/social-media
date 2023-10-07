/* eslint-disable react/prop-types */
import { MdPersonRemove, MdShare, MdComment, MdThumbUp, MdSend } from 'react-icons/md'
import ProfilePic from './ProfilePic'
import { Form } from 'react-router-dom'
import { useDashboardContext } from '../pages/Dashboard'

export default function Post({ post }) {
    const { caption, comments, likes , postedBy } = post
    const { name  } = postedBy
    const { unfollowFriend, user } = useDashboardContext()

  return <li className="p-3 rounded-md shadow-md space-y-2 md:space-y-4 bg-grey10 dark:bg-grey800">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                    <ProfilePic img={post.authorProfilePic}/>
                    <h5 className="text-sm font-bold">{name || "admin"}</h5>
                </div>
                
                {
                user.role == "admin" ? null 
                :
                postedBy._id !== user._id
                    &&
                    <Form  method="post">
                        <button onClick={()=> unfollowFriend(postedBy) } type='submit' name="intent" value="unfollowFriend" className="ml-1 flex flex-col items-center">
                        <span className="text-base text-grey0 p-[6px] bg-primary600 rounded-full">
                            <MdPersonRemove />
                        </span>
                        <span className="mt-1 text-xs">Unfollow</span>
                        </button>
                    </Form>
                  }

            </div>

            <p className='text-sm lg:text-base'>{caption}</p>

            <div className="">
                <img src={post.postImage} alt="posts" className='object-cover object-center max-h-[28rem] w-full' />
            </div>

            <div className="flex items-center space-x-2">
                
                <div className="flex items-center space-x-1">
                    <button>
                        <MdThumbUp size={18} />
                    </button>
                    <span className='text-xs'>{likes}</span>
                </div>
                                
                <div className="flex items-center space-x-1">
                    <button>
                        <MdComment size={18} />
                    </button>
                    <span className='text-xs'>{comments}</span>
                </div>
                                
                <Form method='post' className="flex rounded-full flex-1 bg-grey100 bg-opacity-60 dark:bg-grey700 ml-4 self-stretch overflow-hidden items-center">
                    <input name="comment" type="text" placeholder='Leave a comment...' className="dark:caret-primary500 flex-1 outline-none px-3 h-full bg-transparent text-sm tracking-wider placeholder:text-xs placeholder:md:text-sm" />
                    <button type='submit' name="intent" value="addComment" className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                        <MdSend size={18}/>
                    </button>
                </Form>

                <button className='ml-2 p-1 rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                    <MdShare size={18} />
                </button>
            </div>
        </li>
}
