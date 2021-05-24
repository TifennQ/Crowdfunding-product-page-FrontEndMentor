import React from 'react'

const CardsModal = ({cards, pledgeIsSelected, handleClick, handleCompletePledge}) => {

    return (
        <>
            <div>
                {
                    cards.map((card) => {
                        const {id, title, pledge, description, left, pledgeAmount} = card
                        return (
                            <div key={id} className={`${pledgeIsSelected === id ? "border-2 rounded-lg px-5 py-6 my-5 pledge_selected" : "border-2 rounded-lg px-5 py-6 my-5"}`}>
                                <div className="flex items-center">
                                    <div onClick={() => handleClick(id, left)} className={`${left === "0" ? "relative border-2 rounded-full w-8 h-8 cursor-not-allowed" : " relative border-2 rounded-full w-8 h-8 cursor-pointer"}`}>
                                        <div className={`${pledgeIsSelected === id ? "rounded-full w-5 h-5 cursor-pointer selected" : "rounded-full w-5 h-5 cursor-pointer"}`}></div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className={`${left === "0" ? "font-bold gray_disabled" : "font-bold"}`}>{title}</h4>
                                        <h5 className= {`${left === "0" ? "pledge disabled" : "pledge"}`}>{pledge}</h5>
                                    </div>
                                </div>
                                <p className={`${left === "0" ? "mt-5 text-gray-500 disabled" : "mt-5 text-gray-500"}`} >{description}</p>
                                {
                                    left && (
                                        <p className={`${left === "0" ? "text-gray-500 mt-5 disabled" : "text-gray-500 mt-5"}`}><span className="text-black text-2xl font-bold">{left}</span> left</p>
                                    )
                                }
                                {
                                    pledgeIsSelected === id && (
                                            <div className="border-t mt-5 mb-1">
                                                {
                                                    pledgeAmount && (
                                                        <div>
                                                            <p className="mt-5 text-center text-gray-500">Enter your pledge</p>
                                                            <div className="mt-6 flex justify-around">
                                                                <p className="border-2 rounded-full py-2 px-8 text-gray-500">$ <span className="text-black font-bold">{pledgeAmount}</span></p>
                                                                <button onClick={() => handleCompletePledge()} className="btn rounded-full py-2 px-8 text-white">Continue</button>
                                                                </div>       
                                                        </div>
                                            
                                                        )
                                                }
                                      
                                                {
                                                    !pledgeAmount && (
                                                        <div className="mt-5 flex justify-center">
                                                            <button onClick={() => handleCompletePledge()} className="btn rounded-full py-2 px-8 text-white">Continue</button>
                                                        </div>
                                                    )
                                                }   
                                            </div>
                                    )
                                }
                            </div>
                        )
                    })  
                }
                </div>
        </>
    )
}

export default CardsModal
