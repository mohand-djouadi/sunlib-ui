import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import microsoft from "../../assets/microsoft.png"
import { Link } from "react-router-dom"
import signlog from "../../assets/signlog.png"

const Login = () => {
  return (
    <main className="flex justify-center items-center h-[70vh] lg:flex lg:w-full lg:h-[100vh]">
      <div className="h-[90%] flex flex-col justify-center around items-center w-full lg:w-[55%] lg:h-[100vh]">
        <h1 className="text-primary  text-5xl">Log In</h1>
        <form className="my-5 flex h-[30%] w-full flex-col justify-between items-center lg:h-[45%]">
          <div className="my-5 flex flex-row justify-around items-center">
            <img className="w-8 h-8 mx-4" src={google} alt="google" />
            <img className="w-8 h-8 mx-4" src={facebook} alt="facebook" />
            <img className="w-8 h-8 mx-4" src={microsoft} alt="microsoft" />
          </div>
          <input className='my-2 rounded-full border-2 border-black py-2 px-4 w-3xs dark:border-white dark:text-white' type="text" placeholder='username' />
          <input className='my-2 rounded-full border-2 border-black py-2 px-4 w-3xs dark:border-white dark:text-white' type="password" placeholder='password' />
          <label class="group flex items-center cursor-pointer mb-4 mt-2 -ml-25">
            <input class="hidden peer " type="checkbox" />
            <span class="relative w-6 h-6 flex items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secondary peer-checked:bg-secondary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
            <span class="ml-3 text-gray-700 dark:text-white group-hover:text-secondary font-medium transition-colors duration-300">
              Remenber me
            </span>
          </label>
          <Link className="mb-4 text-blue-700 underline">forgot your password</Link>
          <button className='btn-primary px-13' type="submit">Login</button>
          <p className="mt-5 md:hidden dark:text-white">You don't have account <Link className="mb-4 text-blue-700 underline">Sign up</Link></p>
        </form>
      </div>
      <div className="max-sm:hidden bg-primary h-[100vh] w-[45%] flex flex-col justify-around items-center">
        <img className="w-[60%] h-[40%]" src={signlog} alt="signlog" />
        <h2 className="text-3xl font-title w-3xs">Discover, Borrow, Explore – Your Library in a Click!</h2>
        <p>You don't have un account <Link className="mb-4 text-blue-700 underline">Sign up</Link></p>
      </div>
    </main>
  )
}
export default Login