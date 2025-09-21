import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

//! register plugins in App.jsx for used globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black" />
    </div>
  );
};

export default App;
