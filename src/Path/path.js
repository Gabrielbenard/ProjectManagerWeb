import { Routes, Route} from "react-router-dom";
import Contact from "../Components/Pages/Contact";
import Home from "../Components/Pages/Home";
import Company from "../Components/Pages/Company";
import Newproject from "../Components/Pages/Newproject";
import Projects from "../Components/Pages/Project";



function Path(){

    return(


    <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/company" element={<Company/>}/>  
            <Route path="/contact" element={<Contact/>}/>  
            <Route path="/Project" element={<Projects/>}/>  
            <Route path="/newproject" element={<Newproject/>}/>  
    </Routes>

    )

}

export default Path;