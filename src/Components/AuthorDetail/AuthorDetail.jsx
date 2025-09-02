import React from 'react'

const author = {
    name: 'J.K. Rowling',
    rate: 8.9,
    imageUrl:
        'https://res.cloudinary.com/droeghcft/image/upload/v1756499159/jkrowling_rztqot.jpg',
    description:
        'J.K. Rowling is a British writer globally renowned for being the author of the Harry Potter series, a saga that has influenced multiple generations and remains one of the best-selling in history.Before her immense success, she overcame many hardships, writing the first book, Harry Potter and the Sorcerer’s Stone, during a challenging period in her life. After several rejections from publishers, her book was finally published in 1997 and became a worldwide phenomenon.',
    books: 154,
    sales: 1200,
}

const AuthorDetail = () => {
    return (
        <div className="w-[40%] h-[50%] flex flex-col items-center justify-center p-4 border-0 rounded-tr-2xl rounded-br-2xl bg-banner-bg">
            <h3 className="text-primary font-primary text-2xl">About Author</h3>
            <img
                className="rounded-full w-[50%] h-[20%]"
                src={author.imageUrl}
                alt={author.name}
            />
            <div className="flex flex-row items-center justify-evenly">
                <h3 className="text-primary font-normal text-2xl">
                    {author.name}
                </h3>
                <div class="flex items-center justify-center">
                    <span className="text-4xl text-yellow-400">★</span>
                    <h3 className="text-black text-2xl dark:text-white">
                        {author.rate}
                    </h3>
                </div>
            </div>
            <p className="dark:text-white">{author.description}</p>
            <div className="flex flex-row items-center justify-around w-[100%]">
                <span className="text-primary">books : {author.books}</span>
                <span className="text-primary">sales : {author.sales}</span>
            </div>
        </div>
    )
}

export default AuthorDetail
