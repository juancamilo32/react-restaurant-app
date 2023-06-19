import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { AboutUs, Header } from "./Containers";
import SpecialMenu from "./Containers/Menu/SpecialMenu";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
