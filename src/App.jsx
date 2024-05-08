import NavBar from "./components/NavBar";
import HeroText from "./components/HeroText";
import PhoneSection from "./components/PhoneSection";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backgroundClass, setBackgroundClass] = useState("background");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setBackgroundClass("background");
    } else if (windowWidth >= 601 && windowWidth <= 1024) {
      setBackgroundClass("background-tablet");
    } else if (windowWidth <= 600) {
      setBackgroundClass("background-mobile");
    }
  }, [windowWidth]);

  return (
    <div className={`m-40 mb-0 ${backgroundClass} md:m-20 sm:m-5`}>
      <NavBar />
      <HeroText />
      <PhoneSection />
      <Footer />
    </div>
  );
}

export default App;
