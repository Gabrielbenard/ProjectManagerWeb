import {Link} from 'react-router-dom'
import Styles from './navbar.module.css'
import Logo from '../../img/img2.jpg'


function navbar() {
    return (  
        <div className={Styles.nav}>
            
            <Link to="/"> <img src={Logo} alt='Costs'/> </Link>
            
            
            <ul className={Styles.list}>
                <li className={Styles.p}><h2><span className="badge rounded-pill bg-light text-dark">Money time </span> </h2></li>
                <li className={Styles.item}><Link to="/">Home</Link></li>
                <li className={Styles.item}><Link to="/contact">contact</Link></li>
                <li className={Styles.item}><Link to="/company">Company</Link></li>
                <li className={Styles.item}><Link to="/projects">Projects</Link></li>
                <li className={Styles.item}><Link to="/newproject">Newproject</Link></li>
            </ul>
                         
        </div>

    );
}

export default navbar;