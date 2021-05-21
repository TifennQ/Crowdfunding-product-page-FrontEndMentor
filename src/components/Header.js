import React, {useState} from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="absolute w-full flex items-center justify-between px-5 py-8">
                <div>
                    <img src={logo} alt="logo"/>
                </div>

                {isOpen && (
                    <nav className="z-50 absolute w-9/12 ml-10 mt-56">
                        <ul className="bg-white shadow-2xl rounded-2xl py-3">
                            <li className="cursor-pointer py-3 px-5 border-b border-gray-200">About</li>
                            <li className="cursor-pointer py-3 px-5 border-b border-gray-200">Discover</li>
                            <li className="cursor-pointer py-3 px-5">Get Started</li>
                        </ul>
                    </nav>
                )}

                <div>
                    <img 
                        onClick={() => setIsOpen(!isOpen)} 
                        src={hamburger} 
                        alt="burger icon" 
                        className="w-6 cursor-pointer"/>
                </div>
            </header>
        </>
    )
}

export default Header
