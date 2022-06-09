
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Header/Navbar";
import Home from "./Pages/Home/Home"
import MyProjects from "./Pages/MyProjects/MyProjects";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyProjects></MyProjects>}></Route>
        <Route path='/aboutMe' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
