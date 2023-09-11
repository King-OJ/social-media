import { Link } from "react-router-dom";
import { FloatingLabel } from "../components";


export default function Login() {
  return (
    <div className='page'>
      <div className="flex justify-center w-full">
        <form className='w-11/12 max-w-2xl space-y-6 bg-grey10 dark:bg-grey800 py-6 px-4 rounded-xl shadow-lg'>
          <p className='font-semibold text-sm md:text-lg'>Login to your Sociopedia Account. The social media for SocioPaths!</p>
          <FloatingLabel  type='email' name='email' labelText="email" defaultValue="clem@gmail.com"/>
          <FloatingLabel type='password' name='password' labelText="password" defaultValue="secret"/>
          <div className="flex justify-between">
            <button type='submit' className="bg-primary600 px-4 md:px-8 py-1 rounded-md text-sm md:text-lg font-semibold">Sign In</button>
            <button type='submit' className="bg-primary600 px-4 md:px-8 py-1 rounded-md text-sm md:text-lg font-semibold">Explore The App</button>
          </div>
          <p className="text-xs md:text-sm">
          Don‘t have an account?
          <Link to='/register' className='ml-1 font-semibold'>
            Register
          </Link>
        </p>
        </form>
      </div>
    </div>
  )
}
