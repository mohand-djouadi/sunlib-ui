const BookCard = ({ book }) => {
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
        <div className="px-1 py-6 my-2 flex flex-col justify-around items-center border-2 border-primary w-[80%] rounded-2xl lg:w-[25%]">
            <h4 className="text-2xl my-3 h-20 text-center dark:text-white">
                {book.title}
            </h4>
            <img className="w-[100%] h-65" src={book.image} alt={book.title} />
            <h4 className="text-2xl my-3 dark:text-white">{book.author}</h4>
            <div className="mb-3">{stars}</div>
            <div className="flex flex-row justify-between items-center">
                <button className="btn-primary w-25 mx-2">Buy</button>
                <button className="btn-secondary w-25 mx-2 dark:text-white">
                    Borrow
                </button>
            </div>
        </div>
    )
}

export default BookCard
