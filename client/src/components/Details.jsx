import {  MdEdit, MdLocationOn, MdSettings, MdWork } from "react-icons/md"
import personImg from "../assets/p1.jpeg"
import twitterImg from "../assets/twitter.png"
import linkedInImg from "../assets/linkedin.png"
import ProfilePic from "./ProfilePic"
import Adverts from "./Adverts"
import postImg from "../assets/info2.jpeg"
import { useDashboardContext } from "../pages/Dashboard"
import { Link } from "react-router-dom"

export default function Details() {

    const { user } = useDashboardContext()

  return (
    <aside className="hidden md:block">
        <div className="sticky top-28">
        <div className="bg-grey10 dark:bg-grey800 shadow-lg rounded-md px-3 w-full">
            <div className="divide-y-[1px]">
                <div className="py-4">
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                            <ProfilePic img={personImg} user={user}/>
                            <div className="space-y-1">
                                <Link to={`/profile/${user._id}`} className="text-base font-bold">{user.name}</Link>
                                <div className="text-sm text-grey500 dark:text-grey200">{`${user.friends.length} Friends`}</div>
                            </div>
                        </div>

                        <button className="text-xl">
                            <MdSettings/>
                        </button>

                    </div>
                </div>

                <div className="py-4">
                    <div className="space-y-3 text-sm ">
                        <div className="flex items-center space-x-4">
                            <MdLocationOn />
                            <span className=" capitalize text-grey500 dark:text-grey200" >{user.location}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MdWork />
                            <span className=" capitalize text-grey500 dark:text-grey200" >{user.job}</span>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <div className="text-grey500 dark:text-grey200" >Who's viewed my profile</div>
                            <div>8647</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-grey500 dark:text-grey200" >Impressions of my posts</div>
                            <div>897</div>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <h6 className="text-sm font-semibold">Social Links</h6>
                    <ul className="mt-3 space-y-4">
                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src={twitterImg} alt="" className="h-5 w-5"/>
                                <div className="space-y-[2px] text-xs">
                                    <div className="font-semibold">Twitter</div>
                                    <div>Social Network</div>
                                </div>
                            </div>

                            <button className="text-xl">
                                <MdEdit/>
                            </button>
                        </li>
                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src={linkedInImg} alt="" className="h-5 w-5"/>
                                <div className="space-y-[2px] text-xs">
                                    <div className="font-semibold">LinkedIn</div>
                                    <div>Networking Platform</div>
                                </div>
                            </div>

                            <button className="text-xl">
                                <MdEdit/>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="mt-6 lg:hidden">
            <Adverts img={postImg}/>
        </div>
        </div>
    </aside>
  )
}
