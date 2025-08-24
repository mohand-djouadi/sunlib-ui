import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
    faEnvelope,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faInstagram,
    faXTwitter,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="flex flex-row justify-around items-center w-[100%] p-3 bg-primary mt-4 h-[55vh] max-sm:flex max-sm:flex-col max-sm:h-auto">
            <div className="border-2 rounded-2xl border-secondary p-4 w-[70%] h-[100%] flex flex-col justify-around max-sm:w-[90%]">
                <div className="flex flex-row items-center justify-between max-sm:flex max-sm:flex-col">
                    <div>
                        <div className="my-3 text-1xl font-normal">
                            <FontAwesomeIcon
                                className="text-secondary text-2xl px-2"
                                icon={faEnvelope}
                            />
                            Sunlib@gmail.com
                        </div>
                        <div className="my-3 text-1xl font-normal">
                            <FontAwesomeIcon
                                className="text-secondary text-2xl px-2"
                                icon={faPhone}
                            />
                            +1 540 82 43 45
                        </div>
                        <div className="my-3 text-1xl font-normal">
                            <FontAwesomeIcon
                                className="text-secondary text-2xl px-2"
                                icon={faLocationDot}
                            />
                            123 Maple Street, NY USA
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full p-2 items-center mt-5 lg:w-[55%]">
                        <div>
                            <h4 className="font-normal text-2xl text-secondary">
                                Home
                            </h4>
                            <p className="font-normal text-1xl">Our services</p>
                            <p className="font-normal text-1xl">
                                Popular books
                            </p>
                            <p className="font-normal text-1xl">
                                Our client said
                            </p>
                        </div>
                        <div>
                            <h4 className="font-normal text-1xl">
                                Explore books
                            </h4>
                            <h4 className="font-normal text-1xl">About us</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 mt-4 max-sm:flex max-sm:justify-around max-sm:mb-4">
                        <FontAwesomeIcon
                            className="text-3xl text-secondary max-sm:text-4xl"
                            icon={faFacebook}
                        />
                        <FontAwesomeIcon
                            className="text-3xl text-secondary max-sm:text-4xl"
                            icon={faInstagram}
                        />
                        <FontAwesomeIcon
                            className="text-3xl text-secondary max-sm:text-4xl"
                            icon={faXTwitter}
                        />
                        <FontAwesomeIcon
                            className="text-3xl text-secondary max-sm:text-4xl"
                            icon={faLinkedin}
                        />
                    </div>
                    <p className="font-normal text-1xl max-sm:text-center">
                        © 2025 SunLib. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="border-2 rounded-2xl border-secondary p-4 w-[25%] h-[100%] my-2 max-sm:w-[90%]">
                <h3 className="text-center text-2xl">Contact us</h3>
                <form className="flex flex-col items-center h-[100%]">
                    <input
                        className="border-black border-2 rounded-2xl px-2 py-1 w-[90%] my-2"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        className="border-black border-2 rounded-2xl px-2 py-1 w-[90%] my-2"
                        type="text"
                        placeholder="Object"
                    />
                    <textarea
                        className="w-[90%] border-2 rounded-2xl px-2 py1 my-2"
                        rows={3}
                        placeholder="message"
                    ></textarea>
                    <button className="btn-primary">Send</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer
