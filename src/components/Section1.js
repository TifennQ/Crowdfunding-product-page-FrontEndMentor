import React from 'react'
import mastercraft from '../images/logo-mastercraft.svg'
import bookmark from '../images/icon-bookmark.svg'

const Section1 = ({isModalOpen, setIsModalOpen, isDesktop}) => {
    return (
        <>
            <section className={`${isDesktop ? "relative border bg-white w-7/12 mx-auto rounded-lg -mt-20 pb-10" : "relative border bg-white mx-5 px-5 rounded-lg -mt-20 pb-10"}`}>
                <img src={mastercraft} alt="Mastercraft" className="mastercraft-logo"/>
                <div className={`${isDesktop ? "pt-10 pb-3 my-5" : "pt-10 pb-3"}`}>
                    <h2 className="text-center font-bold text-xl pb-2">Mastercraft Bamboo Monitor Riser</h2>
                    <p className={`${isDesktop ? "text-center text-gray-500" : "text-center"}`}>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                    </p>
                </div>
                <div className={`${isDesktop ? "flex justify-between px-20 pt-5" : "flex justify-between"}`}>
                    <button onClick={() => setIsModalOpen(!isModalOpen)} class="btn rounded-full py-1 px-6 text-white">
                        Back this project
                    </button>
                    {
                        isDesktop && (
                            <button className="flex items-center btn-gray rounded-full pr-5">
                                <img src={bookmark} alt="Bookmark"/>
                                <p className="pl-3">Bookmark</p>
                            </button>
                        )
                    }
                    {
                        !isDesktop && (
                            <img src={bookmark} alt="Bookmark"/>
                        )
                    }

                </div>

            </section>
        </>
    )
}

export default Section1
