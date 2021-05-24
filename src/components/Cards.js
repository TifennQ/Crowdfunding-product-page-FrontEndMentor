import React from 'react'


const Cards = ({cards, isDesktop}) => {
    return (
        <>
            <div className={`${isDesktop ? "pt-5" : null}`}>
                {
                    cards.map((card) => {
                        const {id, title, pledge, description, left, button} = card
                        return (
                            <div key={id} className="border-2 rounded-lg px-5 py-5 my-5">
                                <div className={`${isDesktop ? "flex justify-between" : null}`}>
                                    <h3 className={`${left === "0" ? "text-lg font-bold mb-1 gray_disabled" : "text-lg font-bold mb-1"}`}>{title}</h3>
                                    <h4 className= {`${left === "0" ? "pledge font-bold disabled" : "pledge font-bold"}`}>{pledge}</h4>
                                </div>
                                <p className={`${left === "0" ? "mt-5 text-gray-500 disabled" : "mt-5 text-gray-500"}`} >{description}</p>
                                <div className={`${isDesktop ? "flex justify-between" : null}`}>
                                    <p className={`${left === "0" ? "text-gray-500 mt-5 disabled" : "text-gray-500 mt-5"}`}><span className="text-black text-2xl font-bold">{left}</span> left</p>
                                    <button className={`${left === "0" ? "btn-disabled cursor-not-allowed rounded-full py-3 px-6 text-white mt-5 font-bold disabled" : "btn rounded-full py-3 px-6 text-white mt-5 font-bold"}`}>{button}</button>
                                </div>
                            </div>
                        )
                    })  
                }
                </div>
        </>
    )
}

export default Cards
