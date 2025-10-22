import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Contact from "./section/Contact";
import line_1 from "./assets/Asset 1.png";
import line_2 from "./assets/line_1_purple.png";
import Footer from "./section/Footer";
import Projects from "./section/Projects";

function App() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
        <img
          src={line_1}
          className="absolute bottom-0 md:top-0 right-0 opacity-15 -z-10 w-[1000px] -translate-y-1/12"
        />
        <img
          src={line_2}
          className="absolute top-0 left-0 opacity-30 -z-10 w-[1000px] -translate-x-1/4 translate-y-1/4 rotate-[270deg] transform scale-x-[-1]"
        />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
