import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

//! register plugins in App.jsx for used globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center px-0.5 text-4xl font-bold text-red-400">
      Main
    </div>
  );
};

export default App;
