import landingImg from "../assets/chatImg.svg"
import { Link } from 'react-router-dom'
import { useAppContext } from "./AppLayout"
import { Logo } from "../components"
import { MdDarkMode, MdMenu, MdSunny } from "react-icons/md"

export default function Landing() {

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
    <div className="page">
        <div className="space-y-8 flex flex-col items-center">
          <h6 className="font-semibold">Welcome to my Social media App</h6>
          <img src={landingImg} alt="chat" className="max-h-[26rem]"/>
          <p className="max-w-lg mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero autem eum sit quibusdam, illo nulla? Fugiat maxime culpa blanditiis ab?</p>
          <div className="text-primary500 flex justify-between items-center max-w-lg mx-auto w-full font-bold">
            <Link to="/register">Create Account</Link>
            <Link to="/login">Login / Demo App</Link>
          </div>
        </div>
      
      </div>
  </>
  )
}
