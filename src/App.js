import Fiber from "./Components/Fiber";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Slider from "./Components/Slider";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Fiber/>
      <Portfolio/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
