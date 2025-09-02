import { Link } from 'react-router-dom'

const RelatedbookItem = ({ book }) => {
    return (
        <Link
            to={`/books/${book.id}`}
            className="px-3 py-2 flex flex-col max-h-[100%] h-80 justify-evenly items-center border-2 border-primary w-[30%] mx-auto rounded-2xl max-sm:w-[70%]"
        >
            <h4 className="text-1xl h-10 text-center dark:text-white">
                {book.title}
            </h4>
            <img className="w-[70%] h-30" src={book.image} alt={book.title} />
            <h4 className="text-1xl my-1 dark:text-white">{book.author}</h4>
            <div className="text-primary text-2xl my-2">{book.price} $</div>
        </Link>
    )
}

export default RelatedbookItem
