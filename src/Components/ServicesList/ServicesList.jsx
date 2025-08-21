import buyService from "../../assets/buyservice.png"
import borrowService from "../../assets/borrowservice.png"
import deliveryService from "../../assets/deliveryservice.png"
import ServiceCard from "../ServiceCard/ServiceCard"
import TitleSeparator from "../TitleSeprator/TitleSeparator"

const services = [
    {
        title: 'Buy books',
        description: 'Buy any book of your choice and get a 20% discount if you are a student by scanning your student card',
        image: buyService
    },
    {
        title: 'Borrow books',
        description: 'Borrow a book of your choice for your preferred period and enjoy a free extension for thesis defense cases by scanning your defense authorization',
        image: borrowService
    },
    {
        title: 'Switch delivery',
        description: 'Whether you borrow or buy books, you can choose home delivery or schedule a pickup date at our location. You can also change your choice at any time',
        image: deliveryService
    }
]

const ServicesList = () => {
  return (
    <>
      <TitleSeparator title="Our services" />
      <div className="lg:flex lg:flex-row">
        {
          services.map((service) => (
            <ServiceCard service={service} />
          ))
        }
      </div>
    </>
  )
}

export default ServicesList