import { MdMenu, MdSunny, MdDarkMode, MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useAppContext } from '../pages/AppLayout';
import { useDashboardContext } from '../pages/Dashboard';

export default function Navbar() {
  const { logout } = useDashboardContext()

  const {isDarkTheme, toggleTheme, toggleMobileMenu, toggleLogout, showLogoutBox} = useAppContext()
  
  return (
    <>
      <nav className="h-16 md:h-20
      bg-grey10 dark:bg-grey800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-full ">
          <div className="flex h-full items-center justify-between">
            <Link to="/dashboard" className="grid grid-flow-col gap-2 items-center">
              <Logo />
              <h3 className="text-primary500 font-extrabold">Sociopedia</h3>
            </Link>

            <div className='relative flex items-center md:space-x-6'>
              <button className='hidden md:text-2xl md:block' onClick={toggleTheme}>
                {isDarkTheme ? <MdSunny/> : <MdDarkMode />}
              </button>
              <button onClick={toggleLogout} className='md:text-2xl p-[3px] rounded-full border border-primary500'>
                <MdPerson />
              </button>
              <div className={ showLogoutBox ? "text-base font-bold absolute px-4 md:px-6 py-1 rounded-md z-50 right-0 top-10 shadow-md bg-grey0 dark:bg-grey700" : "hidden"}>
                <button onClick={()=>{
                  toggleLogout();
                  logout();
                  }}>Logout</button>
              </div>
              <button className='md:hidden text-2xl' onClick={toggleMobileMenu}>
                <MdMenu/>
              </button>
            </div>
           

          </div>
        </div>
      </nav>
    </>
  )
}
