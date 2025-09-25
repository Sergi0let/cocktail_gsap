import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import About from "./components/About";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

//! register plugins in App.jsx for used globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  );
};

export default App;
