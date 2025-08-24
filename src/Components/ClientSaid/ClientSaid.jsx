import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clientImg from '../../assets/client.png'
import TitleSeparator from '../TitleSeprator/TitleSeparator'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const clients = [
    {
        image: clientImg,
        name: 'Sofian Ghizef',
        said: 'I absolutely love this library! It has a fantastic selection of books, a quiet and comfortable reading space, and very helpful staff. The borrowing process is simple, and I appreciate the online catalog for easy book searches. Highly recommended for book lovers!',
    },
    {
        image: clientImg,
        name: 'Amel Kaci',
        said: 'A wonderful place to spend time! The library is well-organized, and I always find the books I need. The digital services are very convenient, and the staff is welcoming. A must-visit for students and researchers.',
    },
    {
        image: clientImg,
        name: 'Yacine Belkacem',
        said: 'This library exceeded my expectations. The atmosphere is calm, perfect for studying, and the variety of books and journals is impressive. The mobile app for tracking my borrowings is a huge plus!',
    },
]

const ClientSaid = () => {
    const [currentClient, setCurrentClient] = useState(clients[0])

    const handleLeftSwitch = () => {
        const clientIndex = clients.findIndex(
            (client) => client.name == currentClient.name
        )
        if (clientIndex == clients.length - 1) {
            setCurrentClient(clients[0])
        } else {
            setCurrentClient(clients[clientIndex + 1])
        }
    }

    const handleRightSwitch = () => {
        const clientIndex = clients.findIndex(
            (client) => client.name == currentClient.name
        )
        if (clientIndex == 0) {
            setCurrentClient(clients[clients.length - 1])
        } else {
            setCurrentClient(clients[clientIndex - 1])
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <TitleSeparator title="Our client said" />
            <div className="flex flex-row justify-around items-center w-[95%]">
                <div>
                    <FontAwesomeIcon
                        onClick={() => handleLeftSwitch()}
                        className="text-4xl dark:text-white"
                        icon={faChevronLeft}
                    />
                </div>
                <div className="mt-6 flex flex-col justify-evenly items-center h-[70vh] w-[80%] mx-auto lg:h-[85vh] lg:w-[85%]">
                    <img
                        className="h-70 w-[75%] lg:w-[45%] lg:h-70"
                        src={currentClient.image}
                        alt={currentClient.name}
                    />
                    <h2 className="font-normal text-4xl dark:text-white">
                        {currentClient.name}
                    </h2>
                    <p className="w-[75%] px-2 py1 font-normal dark:text-white">
                        {currentClient.said}
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon
                        onClick={() => handleRightSwitch()}
                        className="text-4xl dark:text-white"
                        icon={faChevronRight}
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientSaid
