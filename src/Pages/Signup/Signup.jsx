import signlog from "../../assets/signlog.png"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <main className="flex justify-center items-center h-[70vh] lg:flex lg:w-full lg:h-[100vh]">
      <div className="h-[90%] flex flex-col justify-center around items-center w-full lg:w-[55%] lg:h-[100vh]">
        <h1 className="text-primary  text-5xl">Create Account</h1>
        <form className="my-5 flex h-[30%] w-full flex-col justify-between items-center lg:h-[45%]">
          <div className="flex flex-row justify-center">
            <input className='my-2 rounded-full border-2 border-black mx-2 py-2 px-4 w-[43%] dark:border-white dark:text-white lg:w-[40%]' type="text" placeholder='first name' />
            <input className='my-2 rounded-full border-2 border-black mx-2 py-2 px-4 w-[43%] dark:border-white dark:text-white lg:w-[40%]' type="text" placeholder='lastname' />
          </div>
          <input className='my-2 rounded-full border-2 border-black py-2 px-4 w-sm dark:border-white dark:text-white' type="text" placeholder='email' />
          <input className='my-2 rounded-full border-2 border-black py-2 px-4 w-sm dark:border-white dark:text-white' type="text" placeholder='username' />
          <input className='my-2 rounded-full border-2 border-black py-2 px-4 w-sm dark:border-white dark:text-white' type="password" placeholder='password' />
          <input className='my-2 rounded-full border-2 border-black py-2 px-4 w-sm dark:border-white dark:text-white' type="password" placeholder='confirmation' />
          <button className='btn-primary mt-4 px-13' type="submit">Signup</button>
          <p className="mt-5 md:hidden dark:text-white">You don't have account <Link to="/login" className="mb-4 text-blue-700 underline">Log in</Link></p>
        </form>
      </div>
      <div className="max-sm:hidden bg-primary h-[100vh] w-[45%] flex flex-col justify-around items-center">
        <img className="w-[60%] h-[40%]" src={signlog} alt="signlog" />
        <h2 className="text-3xl font-title w-3xs">Discover, Borrow, Explore – Your Library in a Click!</h2>
        <p>You already have un account <Link to="/login" className="mb-4 text-blue-700 underline">Log in</Link></p>
      </div>
    </main>
  )
}
export default Signup