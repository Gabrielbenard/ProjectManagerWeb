import ProjectForm from '../project/ProjectForm'
import styles from './Newproject.module.css'
import  styles2 from './Pages.css'
import { useNavigate } from "react-router-dom"

function Newproject(){

    const Navigate = useNavigate()

    function CreatePost(project){
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body:JSON.stringify(project),
        })
        //quando o projeto é adicionado com o post é enviado automaticamente para /projects
        .then((resp)=>resp.json() )
        .then((data) => {
            console.log(data)
            //redirect
            Navigate('/projects', {state:{message:'The Project have been created with sucess'}})
        })
        .catch((err)=> console.log(err))

    }

    return(
        <div className='page'>
            <div className={styles.newproject_container}>
                <h1>Create your Project</h1>
                <p> Create Your project then input your services </p> <br/>
                <p> FORM </p> 
                <ProjectForm handleSubmit={CreatePost} btntext="Create The Project"/>
            </div>
        </div>
    )
}

export default Newproject