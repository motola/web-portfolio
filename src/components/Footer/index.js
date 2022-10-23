import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {


    return (

        <>
       <div className='footer'>
      <nav>
            <ul>
                <li><a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola"><FontAwesomeIcon icon={faGithub}  /></a></li>
                <li><a exact="true" activeclassname="active" href="https://www.linkedin.com/in/akinolaolutola"><FontAwesomeIcon icon={faLinkedin}  /></a> </li>
                <li><a exact="true" activeclassname="active" className="contact-link" href="https://www.instagram.com/akinmotola"><FontAwesomeIcon icon={faInstagram}  /></a></li>
            </ul>
        </nav>

     
            <p>Designed & Built by Akinola Olutola, &#169; 2022.</p>
        
       
        </div>
        
        
        
        </>
    )
}



export default Footer