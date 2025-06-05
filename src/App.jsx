import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
<<<<<<< HEAD
import LetsWork from "./components/common/LetsWork";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
=======
import Footer from "./components/Footer";
>>>>>>> d0ea976a8e2ef758885e79d863d8f9da7b9b8ce7

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<ProjectDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<ServiceDetail />} />
        {/* <Route path="/:service" element={<ServiceDetail />} /> */}
      </Routes>
<<<<<<< HEAD
      <LetsWork />
=======
>>>>>>> d0ea976a8e2ef758885e79d863d8f9da7b9b8ce7
      <Footer />
    </Wrapper>
  );
}

export default App;
