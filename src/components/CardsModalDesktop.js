import React, {useState, useEffect, useRef} from 'react'

const CardsModalDesktop = ({cards, pledgeIsSelected, handleClick, handleCompletePledge}) => {
    const [isHovered, setIsHovered] = useState(false)
    const buttonHovered = useRef()
    useEffect(() => {
       if(isHovered) {
            buttonHovered.current.style.borderColor = "hsl(176, 72%, 28%)"
       }
       else {
            buttonHovered.current.style.borderColor = "rgba(229, 231, 235, 1)"
       }
    }, [isHovered])

    return (
<>
            <div className="mt-10">
                {
                    cards.map((card) => {
                        const {id, title, pledge, description, left, pledgeAmount} = card
                        return (
                            <div key={id} className={`${pledgeIsSelected === id ? "border-2 rounded-lg px-5 py-6 my-5 pledge_selected" : "border-2 rounded-lg px-5 py-6 my-5"}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div onClick={() => handleClick(id, left)} className={`${left === "0" ? "relative border-2 rounded-full w-8 h-8 mr-4 cursor-not-allowed" : " relative border-2 rounded-full w-8 h-8 mr-4 cursor-pointer"}`}>
                                            <div className={`${pledgeIsSelected === id ? "rounded-full w-5 h-5 cursor-pointer selected" : "rounded-full w-5 h-5 cursor-pointer"}`}></div>
                                        </div>
                                        <h4 className={`${left === "0" ? "font-bold gray_disabled mr-4" : "font-bold mr-4"}`}>{title}</h4>
                                        <h5 className= {`${left === "0" ? "pledge disabled" : "pledge"}`}>{pledge}</h5>
                                    </div>
                                    {
                                    left && (
                                        <p className={`${left === "0" ? "text-gray-500 disabled" : "text-gray-500"}`}><span className="text-black text-2xl font-bold">{left}</span> left</p>
                                    )
                                    }
                                </div>
                                <p className={`${left === "0" ? "mt-5 text-gray-500 disabled" : "mt-5 ml-12 text-gray-500"}`} >{description}</p>
            
                                {
                                    pledgeIsSelected === id && (
                                            <div className="border-t mt-5 mb-1">
                                                {
                                                    pledgeAmount && (
                                                        <div className="flex items-center justify-between mt-5">
                                                            <p className="text-center text-gray-500">Enter your pledge</p>
                                                            <div className="flex">
                                                                <p id="buttonHovered" ref={buttonHovered} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="border-2 rounded-full py-2 px-8 mr-5 text-gray-500">$ <span className="text-black font-bold">{pledgeAmount}</span></p>
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

export default CardsModalDesktop
