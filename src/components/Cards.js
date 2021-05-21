import React, {useState} from 'react'
import data from "../data"

const Cards = () => {
    const [cards, setCards] = useState(data)
    return (
        <>
            <div>
                {
                    cards.map((card) => {
                        const {id, title, pledge, description, left, button} = card
                        return (
                            <div key={id} className="border-2 rounded-lg px-5 py-5 my-5">
                                <h3 className={`${left === "0" ? "text-lg font-bold mb-1 gray_disabled" : "text-lg font-bold mb-1"}`}>{title}</h3>
                                <h4 className= {`${left === "0" ? "pledge font-bold disabled" : "pledge font-bold"}`}>{pledge}</h4>
                                <p className={`${left === "0" ? "mt-5 text-gray-500 disabled" : "mt-5 text-gray-500"}`} >{description}</p>
                                <p className={`${left === "0" ? "text-gray-500 mt-5 disabled" : "text-gray-500 mt-5"}`}><span className="text-black text-2xl font-bold">{left}</span> left</p>
                                <button className={`${left === "0" ? "btn-disabled rounded-full py-3 px-6 text-white mt-5 font-bold disabled" : "btn rounded-full py-3 px-6 text-white mt-5 font-bold"}`}>{button}</button>
                            </div>
                        )
                    })  
                }
                </div>
        </>
    )
}

export default Cards
