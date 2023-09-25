import { MdMenu, MdSunny, MdDarkMode } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useAppContext } from '../pages/AppLayout';

export default function Navbar() {
  const {isDarkTheme, toggleTheme, toggleMobileMenu} = useAppContext()
  
  return (
    <>
      <nav className="h-16 md:h-20
      bg-grey10 dark:bg-grey800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-full ">
          <div className="flex h-full items-center justify-between">
            <Link to="/home" className="grid grid-flow-col gap-2 items-center">
              <Logo />
              <h3 className="text-primary500 font-extrabold">Sociopedia</h3>
            </Link>

            <div>
              <button className='hidden md:text-2xl md:block' onClick={toggleTheme}>
                {isDarkTheme ? <MdSunny/> : <MdDarkMode />}
              </button>
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
