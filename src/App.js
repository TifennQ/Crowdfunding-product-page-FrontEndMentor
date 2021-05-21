import About from "./components/About";
import Backers from "./components/Backers";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Section1 from "./components/Section1";
import { Showcase } from "./components/Showcase";
import React, {useState} from 'react'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <Header/>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Showcase/>
      <Section1 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Backers/>
      <About/>
    </div>
  );
}

export default App;
