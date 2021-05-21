import React from 'react'

const CardsModal = ({cards}) => {
    return (
        <>
            <div>
                {
                    cards.map((card) => {
                        const {id, title, pledge, description, left} = card
                        return (
                            <div key={id} className="border-2 rounded-lg px-5 py-6 my-5">
                                <div className="flex items-center">
                                    <div className={`${left === "0" ? "border-2 rounded-full w-8 h-8 cursor-not-allowed" : "border-2 rounded-full w-8 h-8 cursor-pointer"}`}></div>
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
                            </div>
                        )
                    })  
                }
                </div>
        </>
    )
}

export default CardsModal
