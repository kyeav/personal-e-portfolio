import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import { modalContext } from "./Context/ModalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contrastToggle, setContrastToggle] = useState(
    localStorage.getItem("contrastMode")
  );

  const toggleModal = useCallback(() => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
    window.scroll(0, 0);
  }, [isModalOpen]);

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  useLayoutEffect(() => {
    setContrastToggle(localStorage.getItem("contrastMode") || "dark");
    return () => {
      localStorage.setItem("contrastMode", contrastToggle);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("contrastMode", contrastToggle);
  }, [contrastToggle]);

  return (
    <Router>
      <modalContext.Provider
        value={{ isModalOpen, toggleModal, setContrastToggle }}
      >
        <div
          className={`App ${
            isModalOpen ? "modal--open" : ""
          } ${contrastToggle}-theme`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </modalContext.Provider>
    </Router>
  );
}

export default App;
