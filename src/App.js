import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { AboutUs, Header, SpecialMenu, Chef, Intro } from "./Containers";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
}

export default App;
