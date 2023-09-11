import { NavLink } from "react-router-dom";
import { useAppContext } from "../pages/AppLayout"
import links from "../utils/links"
import { MdSunny, MdDarkMode } from 'react-icons/md';

export default function MobileMenu() {
    const { showMobileMenu, isDarkTheme,  toggleTheme } = useAppContext()

  return (
    <div className="fixed top-20 bottom-0 right-0 md:hidden">
        <div className={showMobileMenu ? "transition-all ease-linear duration-200 mr-0 w-60 bg-grey10 dark:bg-grey800 h-full px-10 py-10": " transition-all duration-200 -mr-60 w-0 bg-grey0 dark:bg-grey1000 h-full px-10 py-6"}>
            <ul className="space-y-8">
                {links.map((link, index)=> {
                    const { title, icon } = link;
                    return(
                    <li key={index}>
                        <NavLink  className="flex items-center capitalize text-lg">
                            <span className="mr-4">{icon}</span>
                            {title}
                        </NavLink>
                    </li>
                    )
                })}
                <li>
                    <button className='text-lg flex items-center capitalize hover:text-primary500 transition duration-200' onClick={toggleTheme}>
                        {isDarkTheme ? <MdSunny/> : <MdDarkMode />}
                        <span className="ml-4">{isDarkTheme ? "light mode": "dark mode"}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}
