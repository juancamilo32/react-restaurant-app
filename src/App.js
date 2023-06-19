import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { AboutUs, Header, SpecialMenu, Chef } from "./Containers";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
}

export default App;
