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
 
  const activateState = (e, string="") => {
    if(!string) {
      if(e.target.classList.contains('buttonSelected')) {
        e.target.classList.remove('buttonSelected')
      }
      else {
        let buttons = document.getElementsByClassName('btn')
        for(let button of buttons) {
          button.classList.remove('buttonSelected')
        }
        e.target.classList.add('buttonSelected')
      }
    }
    else if (string === "bookmark") {
      if(e.target.classList.contains('bookmarkSelected')) {
        e.target.classList.remove('bookmarkSelected')
      }
      else {
        e.target.classList.add('bookmarkSelected')
      }
    }


  }

  useEffect(() => {
    const root = document.getElementById('root')
    const body = document.querySelector('body')

    if(isModalOpen || isModalCompletedOpen || isMenuOpen) {
      root.classList.add('withModalOpen')
    }
    else {
      root.classList.remove('withModalOpen')
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
        isDesktop={isDesktop}
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        pledgeIsSelected={pledgeIsSelected} 
        setPledgeIsSelected={setPledgeIsSelected}
        isModalCompletedOpen={isModalCompletedOpen}
        setIsModalCompletedOpen={setIsModalCompletedOpen}
        />
      <ModalCompleted isDesktop={isDesktop} isModalCompletedOpen={isModalCompletedOpen} setIsModalCompletedOpen={setIsModalCompletedOpen}/>
      <Showcase isDesktop={isDesktop}/>
      <Section1 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isDesktop={isDesktop} activateState={activateState}/>
      <Backers isDesktop={isDesktop}/>
      <About isDesktop={isDesktop} activateState={activateState}/>
    </div>
  );
}

export default App;
