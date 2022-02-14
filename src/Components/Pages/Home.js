import Stylespage from './Pages.css';
import img2 from '../../img/img1.png'
import Styles from './Home.module.css'
import LinkButton from '../Layout/LinkButton';


function Home(){

    return(
        <div className='page'>
            <div className={Styles.home_container}>
                <h1>Welcome to <span>Money time</span> </h1>
                <p>Create the project with speed </p>
               <LinkButton to="/newproject" text="Creat Project"/> 
                <img src={img2} alt="costs" />
            </div>
        </div>
    )
}

export default Home