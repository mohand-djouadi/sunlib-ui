import Banner from "../../Components/Banner/Banner"
import Header from "../../Components/Header/Header"
import ServicesList from "../../Components/ServicesList/ServicesList"
import PopularBooks from "../../Components/PopularBooks/PopularBooks"

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <ServicesList />
        <PopularBooks />
    </div>
  )
}
export default Home