import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import Styles1 from './Footer.module.css'

function Footer() {
    return (  
        <footer className={Styles1.footer}>

            <ul className={Styles1.social_list}>
                <li ><FaFacebook/>                </li>
                <li > <FaInstagram/>              </li>
                <li > <FaLinkedin/>               </li>
            </ul>
            <p><span>Costs</span> &copy; 2022 </p>
        </footer>

    );
}

export default Footer;