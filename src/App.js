import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { AboutUs, Header } from "./Containers";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
