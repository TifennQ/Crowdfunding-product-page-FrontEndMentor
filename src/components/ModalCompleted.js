import React from 'react'
import iconCheck from '../images/icon-check.svg'

const ModalCompleted = ({setIsModalCompletedOpen, isModalCompletedOpen, isDesktop}) => {
    return (
        <>
            {
            isModalCompletedOpen && (
                <section className={`${isDesktop ? "absolute w-2/5 bg-white py-10 px-5 z-40 border rounded-lg text-center modalDesktop modalDesktopCompleted" : "absolute w-11/12 bg-white py-8 px-5 z-40 mt-32 mx-4 border rounded-lg text-center modal"}`}>
                    <img src={iconCheck} alt="Icon check" className="mx-auto my-4"/>
                    <h2 className="text-lg font-bold my-4">Thanks for your support !</h2>
                    <p className="text-sm text-gray-500 my-5">
                        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will ge an email once our campaign is completed.
                    </p>
                    <button onClick={() => setIsModalCompletedOpen(!isModalCompletedOpen)} className="btn rounded-full py-2 px-8 text-white">Got it !</button>
                </section>
            )
        }
        </>
    )
}

export default ModalCompleted
