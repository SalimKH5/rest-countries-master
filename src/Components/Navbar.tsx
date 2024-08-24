
import { FaMoon } from "react-icons/fa";
import { useThemeSwitcher } from './ThemeContexte';
import { MdOutlineWbSunny } from "react-icons/md";
const Navbar = () => {

      const {handleThemeSwitch,theme}=useThemeSwitcher();

  return (
    <div className='w-full bg-white dark:bg-[#2b3945] py-3 px-5 text-black dark:text-white flex items-center justify-between'>
      <a href="/" className='text-lg'>Where in the wolrd?</a>
      <div onClick={handleThemeSwitch} className="flex cursor-pointer items-center gap-3">
        {
          theme!=="dark"?
          <>
          <FaMoon />
          <span>dark mode</span>
          </>
          :
          <>
          <MdOutlineWbSunny />
          <span>Light mode</span>
          </>
        }
       
      </div>
    </div>
  )
}

export default Navbar