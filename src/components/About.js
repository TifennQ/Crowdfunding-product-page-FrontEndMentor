import React, {useState} from 'react'
import Cards from './Cards'
import data from "../data"

const About = ({isDesktop}) => {  
    const [cards, setCards] = useState(data) 
    return (
        <>
            <section className={`${isDesktop ?  "bg-white border w-7/12 mx-auto px-24 rounded-lg mt-5 pt-10 pb-10" : "bg-white border mx-5 px-5 rounded-lg mt-5 py-5"}`}>
              <div>
                <h2 className="text-xl font-bold">About this project</h2>
                <p className="text-gray-500 pt-5">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p className="text-gray-500 pt-5">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
    to allow notepads, pens, and USB sticks to be stored under the stand.</p>
              </div>
            <Cards isDesktop={isDesktop} cards={cards}/>
            </section>
        </>
    )
}

export default About
