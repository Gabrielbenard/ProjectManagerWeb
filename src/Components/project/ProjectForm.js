import styled from "styled-components";
import styles from "./ProjectForm.module.css"
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButt from "../Form/SubmitButton";

import {useState,useEffect} from "react"


function ProjectForm({handleSubmit,btntext,ProjectData}) {

    const [categories, SetCategories] = useState([]);
    // vai receber o ProjectData ou vazio 
    const [project,SetProjetc] = useState(ProjectData || {})


 
// o fetch é usado muitas vezes sem parar e o react não renderiza 
//esse vario pedidos , por isso iremos utilizar o Fetch dentro do  useEffect    
useEffect(()=> {
    fetch("http://localhost:5000/categories",{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        },

    })
    //  peguei a resposta em json e tranformei em objeto java script
    .then((resp) => resp.json() )
    // então pegue os dados em "data" armazenei na SetCategories
    .then((data)=>{
        SetCategories(data)
    } )
    .catch((err) =>console.log(err) )
}
,[])


const submit = (e) => {
    e.preventDefault();
    // executo o método que foi passada pela prop e passo project 
    //como parametro da função CreatPost foi passada como props
    handleSubmit(project)
}

// vai pegar o objeto project e vai alterar sua o valor da propriedade name 
function handleChange(e){
    SetProjetc({...project, [e.target.name]: e.target.value})

}


//inserindo objeto dentro de um objeto
function handleCategory(e){
    SetProjetc({...project, caterory:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    }
    })
}


    return ( 
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text" 
            text="Name of The Project" 
            name="name" 
            handleOnChange={handleChange} 
            placeholder="put the name of the project" 
            value={project.name ? project.name : ""}/>    

            <Input 
            type="number" 
            text="Costs of The Project" 
            name="budget" handleOnChange={handleChange} 
            placeholder="put financial costs"  />

            <Select name="category_id" 
            text="select the category"
             options={categories} 
             handleOnChange={handleCategory} 
             value={project.caterory ? project.caterory.id : ''}/>

           <SubmitButt text={btntext}/>

        </form>
     );
}
//option conterá categories e setcategories obterá o data do fetch get da db.json 
//{se true ? faça isso  :  senão faça isso  }
// É IMPORTANTE OBSERVAR O CATERORY ESCRITO ERRONEAMENTE DE PROPÓSITO O MODO
//COMO ESTÁ ESCRITO NO DB.JSON

export default ProjectForm;