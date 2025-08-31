import book from '../../assets/book.png'
import book2 from '../../assets/book2.png'
import book3 from '../../assets/book3.png'
import TitleSeparator from '../TitleSeprator/TitleSeparator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import PopularBookCard from '../PopularBookCard/PopularBookCard'

const books = [
    {
        title: 'The book of art',
        image: book,
        author: 'Regina Phalange',
        rate: 3,
    },
    {
        title: 'Harry Potter and the cursed child',
        image: book2,
        author: 'J.K Riowling',
        rate: 5,
    },
    {
        title: 'Don’t look back',
        image: book3,
        author: 'Isaac Nelson',
        rate: 4,
    },
    {
        title: 'The Silent Forest',
        image: book2,
        author: 'Laura Green',
        rate: 4,
    },
    {
        title: 'Journey to the Stars',
        image: book3,
        author: 'Michael Turner',
        rate: 5,
    },
]

const PopularBooks = () => {
    const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= 640)
    const [mobileCards, setMobileCards] = useState(books[0])
    const [cards, setCards] = useState([books[0], books[1], books[2]])
    const [startIndex, setStartIndex] = useState(0)

    // Mise à jour de la largeur d'écran lors du redimensionnement
    useEffect(() => {
        const handleResize = () => {
            setIsMobileWidth(window.innerWidth <= 640)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Navigation pour mobile
    const handleMobileNext = () => {
        const currentIndex = books.findIndex(
            (book) => mobileCards.title === book.title
        )
        const nextIndex = (currentIndex + 1) % books.length
        setMobileCards(books[nextIndex])
    }

    const handleMobilePrev = () => {
        const currentIndex = books.findIndex(
            (book) => mobileCards.title === book.title
        )
        const prevIndex = (currentIndex - 1 + books.length) % books.length
        setMobileCards(books[prevIndex])
    }

    // Navigation pour écrans larges
    const handleNext = () => {
        const nextIndex = (startIndex + 1) % books.length
        setStartIndex(nextIndex)

        // Créer le nouveau jeu de cartes à afficher
        const newCards = []
        for (let i = 0; i < 3; i++) {
            newCards.push(books[(nextIndex + i) % books.length])
        }
        setCards(newCards)
    }

    const handlePrev = () => {
        const prevIndex = (startIndex - 1 + books.length) % books.length
        setStartIndex(prevIndex)

        // Créer le nouveau jeu de cartes à afficher
        const newCards = []
        for (let i = 0; i < 3; i++) {
            newCards.push(books[(prevIndex + i) % books.length])
        }
        setCards(newCards)
    }

    return (
        <>
            <TitleSeparator title="Popular books" />
            <div className="lg:flex lg:flex-row lg:justify-evenly lg:items-center flex justify-evenly items-center w-[95%] mx-auto">
                <div>
                    <FontAwesomeIcon
                        className="text-4xl dark:text-white cursor-pointer"
                        icon={faChevronLeft}
                        onClick={isMobileWidth ? handleMobilePrev : handlePrev}
                    />
                </div>
                <div className="flex flex-col justify-center items-center mt-6 lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-4">
                    {isMobileWidth ? (
                        <PopularBookCard book={mobileCards} />
                    ) : (
                        cards.map((card, index) => (
                            <PopularBookCard key={index} book={card} />
                        ))
                    )}
                </div>
                <div>
                    <FontAwesomeIcon
                        className="text-4xl dark:text-white cursor-pointer"
                        icon={faChevronRight}
                        onClick={isMobileWidth ? handleMobileNext : handleNext}
                    />
                </div>
            </div>
        </>
    )
}

export default PopularBooks
