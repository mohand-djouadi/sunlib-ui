import BookFilters from '../../Components/BookFilters/BookFilters'
import BooksList from '../../Components/BooksList/BooksList'

const Books = () => {
    return (
        <div className="flex flex-row h-[73%]">
            <BookFilters />
            <BooksList />
        </div>
    )
}

export default Books
