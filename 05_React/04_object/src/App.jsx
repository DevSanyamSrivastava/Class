import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./website/Layout";
import Home from './website/Home'
import About from './website/About'
import Contact from './website/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
           <Route path="/aboutMe" element={<About/>} />
            <Route index element={<Home/>} />
           <Route path="/contact-me" element={<Contact/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
