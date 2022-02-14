
import styles from "./index.css";
import {BrowserRouter,Routes, Route,  Link} from "react-router-dom"
import Path from "./Path/path";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import styled from "styled-components"


function App() {


  return (
    <BrowserRouter>
          
          <Navbar/>

          <Path/>
          
          <Footer/>
          
    </BrowserRouter>
  );
}

export default App;
