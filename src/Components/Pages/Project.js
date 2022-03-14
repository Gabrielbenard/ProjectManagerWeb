import Message from "../Layout/Message";
import {useLocation} from 'react-router-dom';
import  styles2 from './Pages.css'
import styles from './Projects.module.css';
import Container from '../container/Container.js'
import styles3 from '../container/container.module.css'
import LinkButton from "../Layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../Layout/Loading";

function Projects() {

    const[projects, SetProjects] = useState([]);

    const [removeLoading,SetRemoveLoading]= useState(false);
    
    // ProjectsMessage criada para dar a mensagem , começará com string vázia 
    const[projectsMessage, setprojectsMessage]= useState('')

    const location = useLocation();
    let message = '';
   
    //se tiver alguma coisa no location.state, vai acessar e armazenar na let message 
    if (location.state){
        message = location.state.message
    }
    //  esse fetch irá pegar os projetos do dbjson
    useEffect( () => {
        setTimeout(()=>{
            fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',}

        })
        .then(resp => resp.json())
        .then(data =>{SetProjects(data)
        // Loading irá aparecer antes setremoveloading ficar true isso ele faz quando acessa o banco de dados
        SetRemoveLoading(true) })
        .catch(err => console.log(err))

    },3000)

        },[])

function RemoveProject(id){

// para colocar o parametro id na http colocamos crase e dentro colocamos ${ id aqui dentro}
    fetch(`http://localhost:5000/projects/${id}`, { 
    method : 'DELETE',
    headers : {
        'Content-Type': 'application/json',
    }  
    })
    .then((resp) => resp.json())
    .then((data) => { 
        // O array data que contem as informações do banco de dados será filtrado 
        // só passará os que tiverem o id diferente do id de referência ${id}
        SetProjects(projects.filter((project) => project.id !== id))
        //além disso colocará a messagem projeto removido no projectsMessage
        setprojectsMessage('Projeto removido com Sucesso!')
        
    }) 
    .catch((err)=> console.log(err))
}



// se message for true faça && <Message msg={message} type="sucess"/>
    return (  
            <div className={styles.project_container}>
                <div className={styles.title_container}>                  
                     <h1> MY projects </h1>
                     <a href='#'>  new project </a>               
                </div>

                <LinkButton to="/newproject" text="Create project"/>
                
                {message && <Message msg={message} type="sucess"/>}

                {projectsMessage && <Message msg={projectsMessage} type="sucess"/>}

                <Container customClass="start" >
                        {projects.length > 0 && 
                        projects.map((project)=>
                            <ProjectCard 
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.caterory.name}
                            key={project.id}
                            handleRemove={RemoveProject}
                            /> 
                        )}

                        {!removeLoading && <Loading/>}

                </Container>
            </div>
         

    );
}

export default Projects;