import { Outlet } from 'react-router-dom'
import { MobileMenu } from '../components'
import { useState, createContext, useContext} from 'react';


const AppContext = createContext()

export default function AppLayout() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showLogoutBox, setShowLogoutBox] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if(!htmlElement.classList.contains("dark")){
      htmlElement.classList.add("dark")
      setIsDarkTheme(!isDarkTheme)
      return;
    }
    htmlElement.classList.remove("dark");
    
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
    console.log("toggle mobile menu");
  };

  const toggleLogout = async () => {
    setShowLogoutBox(!showLogoutBox)
  };

  const [isEditingProfile, setIsEditingProfile] = useState(false)

  function toggleProfileSettings(){
    setIsEditingProfile(!isEditingProfile)
  }
  

  return (
    <AppContext.Provider
    value={{
      toggleTheme,
      toggleMobileMenu,
      showLogoutBox,
      toggleLogout,
      showMobileMenu,
      isDarkTheme,
      
    }}
    >
      <Outlet context={[toggleProfileSettings, isEditingProfile]}/>
      <MobileMenu />
    </AppContext.Provider>
  )
}

export const useAppContext = ()=> useContext(AppContext);