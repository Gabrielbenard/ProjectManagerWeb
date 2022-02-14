import { Link } from "react-router-dom";
import styled from "styled-components";


const Alfa = styled.div`
        background-color: orange;
        color: whitesmoke;
        padding: 0.5em 1em;
        text-decoration: none!important;
        transition: 0.5s;
        &:hover {
            color: gray;
            
        };

 `;
 


function LinkButton({to,text}) {
 

    return (  
           <Link to={to}> <Alfa> {text} </Alfa> </Link>  

    );
}

export default LinkButton;