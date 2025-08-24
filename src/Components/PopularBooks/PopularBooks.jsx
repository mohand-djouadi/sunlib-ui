import book from '../../assets/book.png'
import book2 from '../../assets/book2.png'
import book3 from '../../assets/book3.png'
import BookCard from '../BookCard/Bookcard'
import TitleSeparator from '../TitleSeprator/TitleSeparator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

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
]

// TODO: add right and left switch and display card with width device

const PopularBooks = () => {
    return (
        <>
            <TitleSeparator title="Popular books" />
            <div className="lg:flex lg:flex-row lg:justify-evenly lg:items-center">
                <div className="max-sm:hidden">
                    <FontAwesomeIcon
                        className="text-4xl dark:text-white"
                        icon={faChevronLeft}
                    />
                </div>
                <div className="flex flex-col justify-center items-center mt-6 lg:flex lg:flex-row lg:justify-evenly lg:items-center">
                    {books.map((book) => (
                        <BookCard book={book} />
                    ))}
                </div>
                <div className="max-sm:hidden">
                    <FontAwesomeIcon
                        className="text-4xl max-sm:hidden dark:text-white"
                        icon={faChevronRight}
                    />
                </div>
            </div>
        </>
    )
}

export default PopularBooks
