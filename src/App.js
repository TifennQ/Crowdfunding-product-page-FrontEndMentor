import Backers from "./components/Backers";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import { Showcase } from "./components/Showcase";


function App() {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Section1/>
      <Backers/>
    </div>
  );
}

export default App;
