import React from 'react'

const About = () => {
    return (
        <div className="lg:flex lg:flex-row lg:w-[100%]">
            <div className="w-[90%] mx-auto p-4 border-2 border-primary rounded-2xl my-3 lg:w-[32%]">
                <h3 className="text-2xl text-center font-primary text-primary">
                    Foundation
                </h3>
                <p className="dark:text-white">
                    SunLib was founded with a passion for knowledge and a
                    commitment to making books accessible to everyone. Our
                    mission is to create a space where readers of all ages can
                    explore, learn, and grow. With a vast collection of books
                    across various genres, we strive to provide a seamless and
                    enjoyable reading experience, whether online or in-person.
                </p>
            </div>
            <div className="w-[90%] mx-auto p-4 border-2 border-primary rounded-2xl my-3 lg:w-[32%]">
                <h3 className="text-2xl text-center font-primary text-primary">
                    Authors
                </h3>
                <p className="dark:text-white">
                    At SunLib, we value and celebrate authors from all
                    backgrounds. Our platform supports both established and
                    emerging writers, offering them a space to share their work
                    with a wider audience. We believe that every book has a
                    story to tell, and we are dedicated to promoting diverse
                    voices in literature. If you are an author looking to
                    collaborate with us, we would love to hear from you!
                </p>
            </div>
            <div className="w-[90%] mx-auto p-4 border-2 border-primary rounded-2xl my-3 lg:w-[32%]">
                <h3 className="text-2xl text-center font-primary text-primary">
                    Privacy policy
                </h3>
                <p className="dark:text-white">
                    At SunLib, we take your privacy seriously. We are committed
                    to protecting your personal information and ensuring a safe
                    browsing and reading experience. Any data collected is used
                    solely to enhance our services and will never be shared
                    without your consent. For more details on how we handle your
                    information.
                </p>
            </div>
        </div>
    )
}

export default About
