import React, {useState} from 'react'
import dataModal from '../dataModal'
import iconClose from '../images/icon-close-modal.svg'
import CardsModal from './CardsModal'
import CardsModalDesktop from './CardsModalDesktop'

const Modal = ({isDesktop, isModalOpen, setIsModalOpen, pledgeIsSelected, setPledgeIsSelected, setIsModalCompletedOpen, isModalCompletedOpen}) => {
    const [cardsModal, setCardsModal] = useState(dataModal)
    const handleClick = (id, left) => {
        if(left === "0") {
            return 
        }
        else {
            if(pledgeIsSelected === id) {
                setPledgeIsSelected(0)
            }
            else {
                setPledgeIsSelected(id)
            }
        }

    }

    const handleCompletePledge = () => {
        setIsModalOpen(false)
        setIsModalCompletedOpen(true)
    }

    return (
        <>
        {
            isModalOpen && (
                <section className={`${isDesktop ?  "absolute w-1/2 bg-white py-10 px-5 z-40 mt-32 border rounded-lg modalDesktop" :  "absolute w-11/12 bg-white py-5 px-5 z-40 mt-32 mx-4 border rounded-lg modal" }`}>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">Back this project</h2>
                        <img className="cursor-pointer" src={iconClose} alt="Close icon" onClick={() => setIsModalOpen(false)} />
                    </div>
                    <p className="my-5 text-sm text-gray-500">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>

                {
                    !isDesktop && (
                        <CardsModal 
                        cards={cardsModal} 
                        pledgeIsSelected={pledgeIsSelected} 
                        handleClick={handleClick}
                        handleCompletePledge={handleCompletePledge}
                        />
                    )
                }
                {
                    isDesktop && (
                        <CardsModalDesktop
                            pledgeIsSelected={pledgeIsSelected} 
                            setPledgeIsSelected={setPledgeIsSelected} 
                            setIsModalOpen={setIsModalOpen}
                            setIsModalCompletedOpen={setIsModalCompletedOpen}
                            handleClick={handleClick}
                            handleCompletePledge={handleCompletePledge}
                        />
                    )
                }

            </section>
            )
        }

        </>
    )
}

export default Modal
