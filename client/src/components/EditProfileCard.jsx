import { MdClose } from "react-icons/md"
import FloatingLabel from "./FloatingLabel"
import { useAppContext } from "../pages/AppLayout"
import p1 from '../assets/p1.jpeg'

// eslint-disable-next-line react/prop-types
export default function EditProfileCard({ user }) {

    const { isEditingProfile, toggleProfileSettings } = useAppContext()
    
  return (
    <div className="fixed bottom-0 max-h-[600px]">
        <div className={isEditingProfile ? "w-[300px] rounded-md shadow-lg translate-y-0 bg-grey10 dark:bg-grey800 transition-all duration-200" : "w-[300px] rounded-md shadow-sm transition-all duration-200 translate-y-full bg-grey200 dark:bg-grey600 "}> 
            <div className="pb-6 px-4 space-y-6 w-full">
                <div className="mb-6 flex pt-2">
                    <h6 className="flex-1 text-base font-bold">Edit Profile</h6>
                    <button onClick={()=>toggleProfileSettings()} className="p-[3px] f border rounded-full">
                        <MdClose className="text-sm"/>
                    </button>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <label htmlFor="avatar" className="text-sm max-w-[10rem] mx-auto">Change profile picture (image max 0.5 MB)</label>
                    <input 
                    type="file" 
                    id='avatar'
                    name='avatar'  
                    className="max-w-[12rem] mx-auto h-10 text-sm self-center" 
                    accept="image/*"
                    />
                </div>
                
                
                <FloatingLabel type='text' name='name' labelText="name" defaultValue={user.name}/>
                <FloatingLabel type='text' name='location' labelText="location" defaultValue={user.location} />
                <FloatingLabel type='text' name='job' labelText="Job" defaultValue={user.job} />
                <FloatingLabel type='email' name='email' labelText="email" defaultValue={user.email}/>
                <div className="flex justify-center">
                    <button type="submit" className="bg-primary600 shadow-md text-grey0 px-6 py-1 text-sm rounded-md font-semibold">Update Profile</button>
                </div>
            </div>
        </div>
    </div>
  )
}
