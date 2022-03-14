import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react"
import Loading from '../Layout/Loading'
import Container from '../container/Container'
import styles from './Project_.module.css'
import ProjectForm from '../project/ProjectForm'
import Message from '../Layout/Message'

// página de editar 
function Project_() {
        const { id } = useParams()
        //é necessário colocar um array vazio dentro do use state para que 
        // set um novo array que vem do dbjson
        const [project, Setproject ] = useState([]);
        const[showProjectForm,setshowprojectform] = useState(false)
        const[message, setmessage] = useState();
        const[type,settype] = useState();


       useEffect(()=>{
           fetch(`http://localhost:5000/projects/${id}`,{
               method: 'GET',
               headers: {
                   'Content-Type' :'application/json'
               },
           })
            .then((resp) => resp.json())
            .then((data) =>  Setproject(data))
            .catch((err)=> console.log(err))           

        },[id]) 

//mudar a forma do botão 
function toggleProjectForm() {
setshowprojectform(!showProjectForm)
    
}

// função que vai alterar quando clickado no submit nesse caso o conclude 
function editPost(project){
    if(project.budget < project.cost){
       setmessage('the project budget can`t be less than project cost')
       settype('error')
       return false
    }
    //PATCH VERBO HTTP PARA ALTERAR APENAS 
    fetch(`http://localhost:5000/projects/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
    })
    .then(resp => resp.json())
    .then((data) => { 
        Setproject(data)
        //setshowprojectform ao contrario do que já está
        setshowprojectform(false)
        
        setmessage('sucess Project Updated')
        settype('success')
    })
    .catch((err)=> console.log(err))
}




// OBS : COMO CLASSNAME COLOCA PROJECT INFO COM 100% WIDTH VAI OCUPAR UMA LINHA 
//TODA E COMO ESTÁ COM FLEX WRAP VAI PULAR UMA LINHA 
//OU SEJA ELE IRÁ PARA PROXIMA LINHA 
    return (  
        <>
            {project.name ? 
                <div className={styles.project_details}> <Container customClass="column">

                    {message && <Message type={type} msg={message} />}
                    
                    <div className={styles.details_container}>
                            <h1>Project : {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}> { !showProjectForm ? 'Edit Project' : "close project"} </button>
                            {!showProjectForm ? 
                                <div className={styles.project_info}> 
                                    <p><span>category:</span>  {project.caterory.name}</p> 
                                    <p><span>Total Costs:</span> R${project.budget}</p> 
                                    <p><span>total used: </span>  R${project.cost}</p> 
                                </div> 

                            :<div className={styles.project_info}>

                                    <ProjectForm 
                                        handleSubmit={editPost} 
                                        btntext='Conclude edit' />
                                </div>
                            } 
                    </div>
                        </Container>
                        
                </div> : <Loading/>}
        </>
    );
}

export default Project_;