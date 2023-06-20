import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { AboutUs, Header, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs } from "./Containers";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </div>
  );
}

export default App;
