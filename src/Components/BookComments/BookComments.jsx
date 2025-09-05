import TitleSeparator from '../TitleSeprator/TitleSeparator'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faComment,
    faPaperPlane,
    faFaceSmile,
} from '@fortawesome/free-solid-svg-icons'
import Picker from 'emoji-picker-react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// TODO: styling emoji picker

const apiUrl = import.meta.env.VITE_API_URL

const BookComments = () => {
    const [showPicker, setShowPicker] = useState(false)
    const [comment, setComment] = useState('')
    const param = useParams()

    const onEmojiClick = (event) => {
        setComment((prevInput) => prevInput + event.emoji)
        setShowPicker(false)
    }

    const fetchBookComments = async () => {
        const { data } = await axios.get(`${apiUrl}/comments/${param.bookId}`)
        return data
    }

    const { data: comments, isLoading } = useQuery({
        queryKey: [`${param.bookId} comments`],
        queryFn: fetchBookComments,
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-[73%] max-sm:w-[100%] h-[100%]">
                <div class="w-10 h-10 border-4 border-t-secondary border-primary rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="mt-25">
            <TitleSeparator title="Comments" />
            <div className="h-[30vh] w-[100%] overflow-y-scroll">
                {comments.map((comment) => (
                    <div className="w-[100%] h-[100%]">
                        <div className="flex flex-row justify-center items-center">
                            <img
                                className="w-[6%]"
                                src={comment.user.imageUrl}
                                alt={comment.user.username}
                            />
                            <div className="p-5 bg-banner-bg rounded-4xl w-[80%]">
                                <h4 className="text-2xl text-primary font-normal">
                                    {comment.user.username}
                                </h4>
                                <p className="dark:text-white">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showPicker && (
                <div>
                    <Picker
                        className="h-20 w-[100%]"
                        onEmojiClick={onEmojiClick}
                    />
                </div>
            )}
            <div className="flex flex-row w-[100%] items-center justify-center mt-2 mx-auto">
                <div className="flex flex-row justify-around items-center px-4">
                    <FontAwesomeIcon
                        icon={faComment}
                        className="text-2xl text-primary"
                    />
                    <span className="text-primary text-2xl font-normal">
                        {comments.length}
                    </span>
                </div>
                <div className="flex flex-row items-center w-[80%]">
                    <input
                        type="text"
                        placeholder="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-[100%] h-12 border-2 border-primary rounded-full p-4 dark:text-white"
                    />
                    <FontAwesomeIcon
                        icon={faFaceSmile}
                        className="text-2xl text-primary px-2"
                        onClick={() => setShowPicker((val) => !val)}
                    />

                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-2xl text-primary px-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default BookComments
