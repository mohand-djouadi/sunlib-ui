import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import ServicesList from '../../Components/ServicesList/ServicesList'
import PopularBooks from '../../Components/PopularBooks/PopularBooks'
import ClientSaid from '../../Components/ClientSaid/ClientSaid'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <ServicesList />
            <PopularBooks />
            <ClientSaid />
            <Footer />
        </div>
    )
}
export default Home
