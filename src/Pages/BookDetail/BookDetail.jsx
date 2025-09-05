import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@tanstack/react-query'
import AuthorDetail from '../../Components/AuthorDetail/AuthorDetail'
import book2 from '../../assets/book2.png'
import book3 from '../../assets/book3.png'
import RelatedbookItem from '../../Components/RelatedBookItem/RelatedbookItem'
import BookComments from '../../Components/BookComments/BookComments'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const relateds = [
    {
        title: 'The book of art',
        image: book2,
        author: 'Regina Phalange',
        price: 3600,
    },
    {
        title: 'Harry Potter and the cursed child',
        image: book3,
        author: 'J.K Riowling',
        price: 5500,
    },
]

const apiUrl = import.meta.env.VITE_API_URL

const BookDetail = () => {
    const param = useParams()
    const fetchBookDetail = async () => {
        const { data } = await axios.get(
            `${apiUrl}/livres/detail?id=${param.bookId}`
        )
        return data
    }
    const { data: book, isLoading } = useQuery({
        queryKey: [`${param.bookId} detail`],
        queryFn: fetchBookDetail,
    })

    const getCategories = (categories) => {
        return categories.join(', ')
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-[73%] max-sm:w-[100%] h-[100%]">
                <div class="w-10 h-10 border-4 border-t-secondary border-primary rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-row justify-around items-center w-[100%] px-5 mt-9 text-center">
                <img
                    className="w-[35%] h-[65vh]"
                    src={book.imageUrl}
                    alt={book.title}
                />
                {/* <div className="w-[60%] h-[65vh]">
                    <h2 className="text-primary font-primary text-3xl">
                        {book.titre}
                    </h2>
                    <div className="flex flex-row justify-around items-center">
                        <h3 className="text-2xl font-normal text-primary">
                            By {book.author}
                        </h3>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-4xl text-yellow-400">★</span>
                            <h3 className="text-black text-2xl dark:white">
                                {book.rate} / 5
                            </h3>
                        </div>
                        <h3 className="text-2xl font-normal text-primary">
                            {book.sellPrice} DA
                        </h3>
                    </div>
                    <div className="flex flex-row justify-around items-center">
                        <h3 className="text-2xl text-primary">
                            <span className="text-2xl text-black">
                                Category :
                            </span>
                            {getCategories(book.categories)}
                        </h3>
                        <h3 className="text-2xl font-normal text-primary">
                            {book.borrowPrice} DA/Day
                        </h3>
                    </div>
                    <p className="px-4">{book.description}</p>
                </div> */}
                <div class="grid grid-cols-3 gap-4 w-[55%] h-[65vh">
                    <div class="col-span-3 flex items-center justify-center">
                        <h2 className="text-primary font-primary text-3xl">
                            {book.title}
                        </h2>
                    </div>
                    <div class="flex items-center justify-center">
                        <h3 className="text-2xl font-normal text-primary">
                            By {book.author}
                        </h3>
                    </div>
                    <div class="flex items-center justify-center">
                        <span className="text-4xl text-yellow-400">★</span>
                        <h3 className="text-black text-2xl dark:text-white">
                            {book.rate} / 5
                        </h3>
                    </div>
                    <div class="flex items-center justify-center">
                        <h3 className="text-2xl font-normal text-primary">
                            {book.sellPrice} DA
                        </h3>
                    </div>
                    <div class="col-span-2 flex items-center justify-start">
                        <h3 className="text-2xl text-primary pl-7">
                            <span className="text-2xl text-black dark:text-white">
                                {' '}
                                Category :{' '}
                            </span>
                            {getCategories(book.categories)}
                        </h3>
                    </div>
                    <div class="flex items-center justify-center">
                        <h3 className="text-2xl font-normal text-primary">
                            {book.borrowPrice} DA/Day
                        </h3>
                    </div>
                    <div class="col-span-3 flex items-center">
                        <p className="px-4 text-left dark:text-white">
                            {book.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="btn-primary w-25">Buy</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="btn-secondary dark:text-white">
                            Borrow
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="text-primary text-2xl pr-2"
                        />
                        <h3 className="text-2xl font-normal dark:text-white">
                            10k
                        </h3>
                    </div>
                </div>
            </div>
            <div className="pt-15 flex flex-row items-center">
                <AuthorDetail />
                <div className="w-[60%]">
                    <h3 className="text-center mb-15 font-primary text-2xl text-primary">
                        Related books
                    </h3>
                    <div className="flex flex-row items-center">
                        {relateds.map((cbook) => (
                            <RelatedbookItem book={cbook} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <BookComments />
            </div>
        </div>
    )
}

export default BookDetail
