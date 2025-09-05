import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
    const roundPrices = (price) => {
        return price.toFixed(2)
    }
    const stars = Array.from({ length: 5 }, (_, i) => (
        <span
            key={i}
            className={`text-5xl ${
                i < book.rate ? 'text-yellow-400' : 'text-gray-300'
            }`}
        >
            ★
        </span>
    ))

    return (
        <Link
            to={`/books/${book.id}`}
            className="px-3 py-2 flex flex-col max-h-[100%] justify-evenly items-center border-2 border-primary w-[30%] rounded-2xl max-sm:w-[70%]"
        >
            <h4 className="text-1xl h-10 text-center dark:text-white">
                {book.title}
            </h4>
            <img
                className="w-[70%] h-30"
                src={book.imageUrl}
                alt={book.title}
            />
            <h4 className="text-1xl my-1 dark:text-white">{book.author}</h4>
            <div className="mb-1">{stars}</div>
            <div className="w-[80%] flex flex-row justify-between items-center">
                <div className="text-primary text-2xl my-2">
                    {roundPrices(book.sellPrice)} $
                </div>
                <div className="text-black text-2xl my-2 dark:text-white">
                    {roundPrices(book.borrowPrice)} $
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button className="btn-primary w-25 mx-2">Buy</button>
                <button className="btn-secondary w-25 mx-2 dark:text-white">
                    Borrow
                </button>
            </div>
        </Link>
    )
}

export default BookCard
