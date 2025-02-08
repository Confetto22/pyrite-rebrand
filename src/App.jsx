import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";

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
        <Route path="/:name" element={<ProjectDetail />} />
        <Route path="/about-us" element={<About />} />
        {/* <Route path="/#" element={<About />} /> */}
      </Routes>
    </Wrapper>
  );
}

export default App;
