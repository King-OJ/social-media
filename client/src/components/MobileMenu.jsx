import { NavLink } from "react-router-dom";
import { useAppContext } from "../pages/AppLayout"
import links from "../utils/links"
import { MdSunny, MdDarkMode } from 'react-icons/md';

export default function MobileMenu() {
    const { showMobileMenu, isDarkTheme,  toggleTheme } = useAppContext()

  return (
    <div className="fixed top-16 bottom-0 right-0 md:hidden">
        <div className={showMobileMenu ? "transition-all ease-linear duration-200 mr-0 w-60 bg-grey10 dark:bg-grey800 h-full py-10": " transition-all duration-200 -mr-60 w-0 bg-grey0 dark:bg-grey1000 h-full py-6"}>
            <ul className="space-y-4">
                {links.map((link, index)=> {
                    const { title, icon, path } = link;
                    return(
                    <li key={index} >
                        <NavLink to={path} className={({ isActive })=> isActive ?"bg-primary500 rounded-l-full text-grey0 flex items-center capitalize text-lg py-1 pl-10": "pl-10 py-1 flex items-center capitalize text-lg"}>
                            <span className="mr-4">{icon}</span>
                            {title}
                        </NavLink>
                    </li>
                    )
                })}
                <li>
                    <button className='pl-10 py-1 text-lg flex items-center capitalize hover:text-primary500 transition duration-200' onClick={toggleTheme}>
                        {isDarkTheme ? <MdSunny/> : <MdDarkMode />}
                        <span className="ml-4">{isDarkTheme ? "light mode": "dark mode"}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}
