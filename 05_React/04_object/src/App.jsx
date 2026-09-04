import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./website/Layout";
import Home from "./website/Home";
import About from "./website/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>} />
        <Route path="about-us" element={<About/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
