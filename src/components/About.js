import React, {useState} from 'react'
import data from "../data"

const About = () => {
    const [cards, setCards] = useState(data)
    return (
        <>
            <section className="bg-white border mx-5 px-5 rounded-lg mt-5 py-5">
              <div>
                <h2 className="text-xl font-bold">About this project</h2>
                <p className="text-gray-500 pt-5">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p className="text-gray-500 pt-5">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
    to allow notepads, pens, and USB sticks to be stored under the stand.</p>
              </div>
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
            </section>
        </>
    )
}

export default About
