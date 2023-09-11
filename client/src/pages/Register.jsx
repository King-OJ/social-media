import { Link } from "react-router-dom"
import { FloatingLabel } from "../components"

export default function Register() {
  return (
    <div className='page'>
      <div className="flex justify-center w-full">
        <form className='w-11/12 max-w-2xl space-y-6 bg-grey10 dark:bg-grey800 py-6 px-4 rounded-xl shadow-lg'>
          <p className='font-semibold text-sm md:text-lg'>Create your Sociopedia Account. The social media for SocioPaths!</p>
          <FloatingLabel type='text' name='name' labelText="name"/>
          <FloatingLabel type='text' name='location' labelText="location"/>
          <FloatingLabel  type='email' name='email' labelText="email"/>
          <FloatingLabel type='password' name='password' labelText="password"/>
          <div className="flex justify-center">
            <button type='submit' className="bg-primary500 px-4 md:px-8 py-1 rounded-md text-sm md:text-lg font-semibold">Register</button>
          </div>
          <p className="text-xs md:text-sm">
          Already have an account?
          <Link to='/login' className='ml-1 font-semibold'>
            Login
          </Link>
        </p>
        </form>
      </div>
    </div>
  )
}

