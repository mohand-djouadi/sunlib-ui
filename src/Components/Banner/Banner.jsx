import banner from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='mt-4 px-2 py-4 bg-banner-bg w-full flex flex-row justify-center items-center'>
        <div class="flex h-50 w-3xl flex-col items-center justify-evenly">
            <p class="w-48 font-title text-2xl dark:text-white">Discover, Borrow, Explore – Your Library in a Click!</p>
            <button class="btn-primary">Explore books</button>
        </div>
        <img className="w-3xl h-35 max-sm:hidden" src={banner} alt="banner" />
    </div>
  )
}

export default Banner