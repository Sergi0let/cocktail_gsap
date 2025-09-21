import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

//! register plugins in App.jsx for used globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="">
      <Navbar />
    </div>
  );
};

export default App;
