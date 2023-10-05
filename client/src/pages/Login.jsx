import { Form, redirect, Link } from 'react-router-dom';
import { FloatingLabel, Logo, SubmitBtn } from "../components";
import { toast } from 'react-toastify';
import customFetch from '../../utilities/customFetch';
import { MdDarkMode, MdMenu, MdSunny } from 'react-icons/md';
import { useAppContext } from './AppLayout';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data)
    .then((response)=> {
      toast.success(response?.data?.msg)
      }
    )
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

export default function Login() {
  
  const {isDarkTheme, toggleMobileMenu, toggleTheme} = useAppContext()

  return (
    <>
       <nav className="h-16 md:h-20
      bg-grey10 dark:bg-grey800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-full ">
          <div className="flex h-full items-center justify-between">
            <Link to="/" className="grid grid-flow-col gap-2 items-center">
              <Logo />
              <h3 className="text-primary500 font-extrabold">Sociopedia</h3>
            </Link>

            <div className='relative flex items-center md:space-x-6'>
              <button className='hidden md:text-2xl md:block' onClick={toggleTheme}>
                {isDarkTheme ? <MdSunny/> : <MdDarkMode />}
              </button>
              <button className='md:hidden text-2xl' onClick={toggleMobileMenu}>
                <MdMenu />
              </button>
            </div>
           

          </div>
        </div>
      </nav>
      <div className='page'>
        <div className="flex justify-center w-full">
          <Form method='post' className='w-11/12 max-w-2xl space-y-6 bg-grey10 dark:bg-grey800 py-6 px-4 rounded-xl shadow-lg'>
            <p className='font-semibold text-sm md:text-lg'>Login to your Sociopedia Account. The social media for SocioPaths!</p>
            <FloatingLabel  type='email' name='email' labelText="email" defaultValue="talk2clemzy2@gmail.com"/>
            <FloatingLabel type='password' name='password' labelText="password" defaultValue="123456"/>
            <div className="flex justify-between">
              <SubmitBtn text="login" actionText="logging in" />
              <button type='button' className="bg-primary500 px-4 md:px-8 py-1 rounded-md text-sm md:text-lg font-semibold">Explore The App</button>
            </div>
            <p className="text-xs md:text-sm">
            Don‘t have an account?
            <Link to='/register' className='ml-1 font-semibold'>
              Register
            </Link>
          </p>
          </Form>
        </div>
      </div>
    </>
  )
}
