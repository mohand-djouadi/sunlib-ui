import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import BookCard from '../BookCard/Bookcard'
import BookSorter from '../BookSorter/BookSorter'

// TODO: manage filters states
const apiUrl = import.meta.env.VITE_API_URL

const BooksList = () => {
    const fetchBooks = async () => {
        const { data } = await axios.get(`${apiUrl}/livres/`)
        return data
    }
    const { data: books, isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: fetchBooks,
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-[73%] max-sm:w-[100%] h-[100%]">
                <div class="w-10 h-10 border-4 border-t-secondary border-primary rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="w-[73%] py-2 max-h-[100%] max-sm:w-[100%]">
            <div className="my-4">
                <BookSorter />
            </div>
            <div className="flex justify-center h-[85%] items-center flex-wrap gap-x-5 gap-y-3 lg:overflow-y-scroll max-sm:w-[100%] max-sm:flex max-sm:flex-wrap max-sm:gap-x-45">
                {books?.map((book) => (
                    <BookCard book={book} />
                ))}
            </div>
        </div>
    )
}

export default BooksList
