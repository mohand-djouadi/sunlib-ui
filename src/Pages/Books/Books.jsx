import BookFilters from '../../Components/BookFilters/BookFilters'
import BooksList from '../../Components/BooksList/BooksList'

const Books = () => {
    return (
        <div className="flex flex-row h-[73%] max-sm:h-[80%] max-sm:flex max-sm:flex-col">
            <BookFilters />
            <BooksList />
        </div>
    )
}

export default Books
