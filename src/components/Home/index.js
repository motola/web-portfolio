import './index.scss';
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import About from '../About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/images/homelogo.svg';
import Contact from '../Contact';
import Work from '../Work';
// import Loader from 'react-loaders';
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  
    const [letterClass] = useState('text-animate');
    const greetingArray = ['H', 'e', 'y', ' ', 't', 'h', 'e', 'r', 'e', ',', ' ', 'I', ' ','a', 'm', ' ']
    const nameArray = ['A','k','i','n','o','l','a','.']
    const jobArray = ['A',' ','F','u','l','l',' ','S','t','a','c','k',' ',' S','o','f','t','w','a','r','e', ' ', '',' ','E','n','g','i','n','e','e','r']
     return (
      <>
        <div className='main-section'>
    <section>
    <main>
    <h3> <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={1} /><span className="green"><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}  /> <br />  </span> <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} /></h3>
    <nav>
    <a exact="true" activeclassname="active" href="https://www.linkedin.com/in/akinolaolutola"s>
    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> 
    </a>
    <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola">
    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> 
    </a>
    <a exact="true" activeclassname="active" className="contact-link" href="https://www.instagram.com/akinmotola">
    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" /> 
    </a> 
    </nav>


    </main>

    <aside className='aside'>
      <img src={Logo} alt="music"/>


    </aside>

    </section>

    <About />
    <Work />
    <Contact />
    </div>
    
    </>
     )
}

export default Home