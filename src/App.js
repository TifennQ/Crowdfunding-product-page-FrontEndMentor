import About from "./components/About";
import Backers from "./components/Backers";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Section1 from "./components/Section1";
import { Showcase } from "./components/Showcase";
import React, {useState, useEffect, useRef} from 'react'
import ModalCompleted from "./components/ModalCompleted";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalCompletedOpen, setIsModalCompletedOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pledgeIsSelected, setPledgeIsSelected] = useState(0)
 
  useEffect(() => {
    const body = document.getElementById('root')

    if(isModalOpen || isModalCompletedOpen || isMenuOpen) {
      body.classList.add('withModalOpen')
    }
    else {
      body.classList.remove('withModalOpen')
    }

  }, [isModalCompletedOpen, isModalOpen, isMenuOpen])
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Modal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        pledgeIsSelected={pledgeIsSelected} 
        setPledgeIsSelected={setPledgeIsSelected}
        isModalCompletedOpen={isModalCompletedOpen}
        setIsModalCompletedOpen={setIsModalCompletedOpen}
        />
      <ModalCompleted isModalCompletedOpen={isModalCompletedOpen} setIsModalCompletedOpen={setIsModalCompletedOpen}/>
      <Showcase/>
      <Section1 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Backers/>
      <About/>
    </div>
  );
}

export default App;
