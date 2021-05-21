import React, {useState} from 'react'
import dataModal from '../dataModal'
import iconClose from '../images/icon-close-modal.svg'
import CardsModal from './CardsModal'

const Modal = ({isModalOpen, setIsModalOpen}) => {
    const [cardsModal, setCardsModal] = useState(dataModal)

    return (
        <>
        {
            isModalOpen && (
                <section className="absolute w-11/12 bg-white py-5 px-5 z-40 mt-32 mx-4 border rounded-lg">
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">Back this project</h2>
                        <img className="cursor-pointer" src={iconClose} alt="Close icon" onClick={() => setIsModalOpen(false)} />
                    </div>
                    <p className="my-5 text-sm text-gray-500">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
                <CardsModal cards={cardsModal}/>
            </section>
            )
        }

        </>
    )
}

export default Modal
