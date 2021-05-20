import React from 'react'

const Backers = () => {
    return (
        <>
            <section className="bg-white border mx-5 px-5 rounded-lg mt-5 pb-5">
                <div className="text-center py-5">
                    <h2 className="text-lg font-bold">$89,914</h2>
                    <p className="text-sm text-gray-500">of $100,000 backed</p>
                </div>
                <div className="w-20 m-auto border-b border-gray-300"></div>
                <div className="text-center py-5">
                    <h2 className="text-lg font-bold">5,007</h2>
                    <p className="text-sm text-gray-500">total backers</p>
                </div>
                <div className="w-20 m-auto border-b border-gray-300"></div>
                <div className="text-center py-5">
                    <h2 className="text-lg font-bold">56</h2>
                    <p className="text-sm text-gray-500">days left</p>
                </div>
                <div className="loadbar-container rounded-lg m-auto">
                    <div className="loadbar rounded-lg"></div>
                </div>
            </section>
        </>
    )
}

export default Backers
