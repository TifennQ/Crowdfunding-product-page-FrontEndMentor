import About from "./components/About";
import Backers from "./components/Backers";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Section1 from "./components/Section1";
import { Showcase } from "./components/Showcase";
import React, {useState, useEffect, useRef} from 'react'
import ModalCompleted from "./components/ModalCompleted";
import useWindowDimensions from './getWindowDimensions';

function App() {
  const {width, height} = useWindowDimensions()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalCompletedOpen, setIsModalCompletedOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pledgeIsSelected, setPledgeIsSelected] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
 
  useEffect(() => {
    const body = document.getElementById('root')

    if(isModalOpen || isModalCompletedOpen || isMenuOpen) {
      body.classList.add('withModalOpen')
    }
    else {
      body.classList.remove('withModalOpen')
    }

    if(width < 960) {
      setIsDesktop(false)
    }
    else {
      setIsDesktop(true)
    }

  }, [isModalCompletedOpen, isModalOpen, isMenuOpen, width])

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDesktop={isDesktop}/>
      <Modal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        pledgeIsSelected={pledgeIsSelected} 
        setPledgeIsSelected={setPledgeIsSelected}
        isModalCompletedOpen={isModalCompletedOpen}
        setIsModalCompletedOpen={setIsModalCompletedOpen}
        />
      <ModalCompleted isModalCompletedOpen={isModalCompletedOpen} setIsModalCompletedOpen={setIsModalCompletedOpen}/>
      <Showcase isDesktop={isDesktop}/>
      <Section1 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Backers/>
      <About/>
    </div>
  );
}

export default App;
