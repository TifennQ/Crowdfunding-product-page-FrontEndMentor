import React from 'react'

const Backers = ({isDesktop}) => {
    return (
        <>
            <section className={`${isDesktop ? "bg-white border w-7/12 mx-auto px-5 rounded-lg mt-5 pb-10" : "bg-white border mx-5 px-5 rounded-lg mt-5 pb-5"}`}>
                <div className={`${isDesktop ? "w-4/5 flex items-center justify-start py-5 m-auto" : null}`}>
                    <div className="text-center py-5">
                        <h2 className={`${isDesktop ? "text-2xl font-bold" : "text-lg font-bold"}`}>$89,914</h2>
                        <p className="text-sm text-gray-500">of $100,000 backed</p>
                    </div>
                    <div className={`${isDesktop ?  "h-16 border-r mx-12 border-gray-300" : "w-20 m-auto border-b border-gray-300"}`}></div>
                    <div className="text-center py-5">
                        <h2 className={`${isDesktop ? "text-2xl font-bold" : "text-lg font-bold"}`}>5,007</h2>
                        <p className="text-sm text-gray-500">total backers</p>
                    </div>
                    <div className={`${isDesktop ?  "h-16 mx-12 border-r border-gray-300" : "w-20 m-auto border-b border-gray-300"}`}></div>
                    <div className="text-center py-5">
                        <h2 className={`${isDesktop ? "text-2xl font-bold" : "text-lg font-bold"}`}>56</h2>
                        <p className="text-sm text-gray-500">days left</p>
                    </div>
                </div>
                <div className="w-4/5  loadbar-container rounded-lg m-auto">
                    <div className="loadbar rounded-lg"></div>
                </div>
            </section>
        </>
    )
}

export default Backers
