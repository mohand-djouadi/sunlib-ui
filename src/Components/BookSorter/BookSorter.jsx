import sort from '../../assets/sort.png'

const BookSorter = () => {
    return (
        <div className="flex flex-row justify-center items-center">
            <img className="w-10 h-8" src={sort} alt="sort" />
            <select className="text-2xl text-primary">
                <option>A--Z</option>
            </select>
        </div>
    )
}

export default BookSorter
