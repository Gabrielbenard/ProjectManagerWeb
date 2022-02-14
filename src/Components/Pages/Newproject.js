import ProjectForm from '../project/ProjectForm'
import styles from './Newproject.module.css'
import  styles2 from './Pages.css'
import {useHistory} from 'react-router-dom'

function newproject(){

    const history = useHistory()

    function CreatePost(project){
        project.cost = 0;
        project.services = [];
        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp)=>resp.json() )
        .then((data)=> {
            console.log(data)
            //redirect
            history.push('/projects', {message:'The Project have been created with sucess'})
        })
        .catch((err)=> console.log(err))

    }

    return(
        <div className='page'>
            <div className={styles.newproject_container}>
                <h1>Create your Project</h1>
                <p> Create Your project then input your services </p> <br/>
                <p> FORM </p> 
                <ProjectForm handleSubmit={CreatePost} ProjectData={data} btntext="Create The Project"/>
            </div>
        </div>
    )
}

export default newproject