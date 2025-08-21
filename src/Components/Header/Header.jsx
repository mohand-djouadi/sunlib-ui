import logo from "../../assets/logo.png"
import DarkToggle from "../DarkToggle/DarkToggle"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="mb-3">
      <header className="flex w-full px-5 flex-row justify-between items-center border-b-2 border-b-secondary py-4 bg-none">
        <div className="flex flex-row">
            <img className="size-16" src={logo} alt="logo" />
            <div className="flex flex-col">
                <span class="font-primary text-3xl text-primary mt-2">Sun</span>
                <span class="font-primary text-3xl text-secondary -mt-3">Lib</span>
            </div>
        </div>
        <input class="max-sm:hidden max-md:hidden dark:text-white bg-primary-bg py-2 px-4 w-2xl border-secondary border-2 my-0.5 rounded-full" type="text" placeholder="Search"></input>
        <DarkToggle />
        <div>
            <button class="text-primary py-2 px-5">
              <Link to="/login">Log in</Link>
            </button>
            <button class="btn-primary">
              <Link to="/signup">Sign up</Link>
            </button>     
        </div>
      </header>
      <div className="flex flex-row justify-evenly items-center mt-3">
        <NavLink to="/" className={({ isActive }) => isActive ? "dark:text-white text-primary" : "dark:text-white"}>Home</NavLink>
        <NavLink to="/books" className={({ isActive }) => isActive ? "dark:text-white text-primary" : "dark:text-white"}>Books</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "dark:text-white text-primary" : "dark:text-white"}>About</NavLink>
      </div>
    </div>
  )
}

export default Header