import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'


function ProjectCard({id, name,budget, category, handleRemove}) {
    
// criamos um constante onde vai conter a  função handleRemove com id como parametro 
// além de criarmos o remove onclick
  const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
  }  
    
    
    return (  
        <div className={styles.project_card}>
           <h4>{name}</h4>
           
           <p>
               <span> total Costs:</span> R$ {budget}
           </p>

           <p className={styles.category_text}>
               <span className={`${styles[category.toLowerCase()]}`}>   </span>{category}
           </p>

           <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`} >
                    <BsPencil/> Edit
                </Link>

                <button  onClick={remove}>
                    <BsFillTrashFill/> Delete
                </button>
           </div>

        </div>
    );    
}

export default ProjectCard; 