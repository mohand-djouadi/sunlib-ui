import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import AuthorDetail from '../../Components/AuthorDetail/AuthorDetail'
import book2 from '../../assets/book2.png'
import book3 from '../../assets/book3.png'
import RelatedbookItem from '../../Components/RelatedBookItem/RelatedbookItem'

const book = {
    titre: 'Harry Potter and the cursed child',
    imageUrl:
        'https://res.cloudinary.com/droeghcft/image/upload/v1756500211/81jVPDq3HKL._UF1000_1000_QL80__ao7pal.jpg',
    description:
        "Basé sur une nouvelle histoire originale de J.K. Rowling, Harry Potter and the Cursed Child est une pièce de théâtre co-écrite par John Tiffany et Jack Thorne. Ce livre marque le retour tant attendu dans l'univers magique de Harry Potter, mais cette fois, l’histoire suit une nouvelle génération.Dix-neuf ans après la bataille de Poudlard, Harry Potter, désormais employé du Ministère de la Magie, tente d’équilibrer sa vie de sorcier célèbre et son rôle de père. Son fils, Albus Severus Potter, peine à trouver sa place sous l'ombre imposante de son père. Entre amitié improbable et secrets du passé, père et fils découvrent que parfois, l'obscurité vient des endroits les plus inattendus...",
    rate: 4,
    sellPrice: 3600,
    borrowPrice: 1200,
    likes: 10000,
    author: 'J.K. Rowling',
    categories: ['fantasy', 'Theatre'],
}

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

const BookDetail = () => {
    const getCategories = (categories) => {
        return categories.join(', ')
    }

    return (
        <div>
            <div className="flex flex-row justify-around items-center w-[100%] px-5 mt-9 text-center">
                <img
                    className="w-[35%] h-[65vh]"
                    src={book.imageUrl}
                    alt={book.titre}
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
                            {book.titre}
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
                    <h3 className="text-center mb-35 font-primary text-2xl text-primary">
                        Related books
                    </h3>
                    <div className="flex flex-row items-center">
                        {relateds.map((cbook) => (
                            <RelatedbookItem book={cbook} />
                        ))}
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default BookDetail
