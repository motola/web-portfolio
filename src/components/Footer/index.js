import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter,faThreads} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {


    return (

        <>
       <div className='footer'>
    

     
            <p>Copyright &#169; 2024 -<span className='bold'> Developed by Akinola.</span> </p>

            <nav>
            <ul>
                <li><a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola"><FontAwesomeIcon icon={faGithub}  /></a></li>
                <li><a exact="true" activeclassname="active" href="https://www.linkedin.com/in/akinolaolutola"><FontAwesomeIcon icon={faLinkedin}  /></a> </li>
                <li><a exact="true" activeclassname="active" className="contact-link" href="https://www.instagram.com/akinmotola"><FontAwesomeIcon icon={faInstagram}  /></a></li>
                <li><a exact="true" activeclassname="active" className="contact-link" href="https://www.instagram.com/akinmotola"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a exact="true" activeclassname="active" className="contact-link" href="https://www.threads.net/@akinmotola"><FontAwesomeIcon icon={faThreads} /></a></li>
            </ul>
        </nav>
        
       
        </div>
        
        
        
        </>
    )
}



export default Footer