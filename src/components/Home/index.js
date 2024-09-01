import React from 'react';
import './index.scss';
import  TechLogo from '../TechStack';
import  Price from '../Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {HashLink} from 'react-router-hash-link';
import Logo from '../../assets/images/heroimage.png';
import Work from '../Work';
import Blog from '../Blog';
import Digital from '../digital'
import Footer from '../Footer';

// import Loader from 'react-loaders';



const Home = () => {
  
    // const [letterClass] = useState('text-animate');
    // const greetingArray = ['H', 'e', 'y', ' ', 't', 'h', 'e', 'r', 'e', ',', ' ', 'I', ' ','a', 'm', ' ']
    // const nameArray = ['A','k','i','n','o','l','a','.']
    // const jobArray = ['A',' ','F','u','l','l',' ','S','t','a','c','k',' ',' S','o','f','t','w','a','r','e', ' ', '',' ','E','n','g','i','n','e','e','r']
     return (
      <>
    <div className='main-section'>
    <section className="section">
    <main>
    <h3> Hello, I'm Akinola, <br/> a Full-Stack Software Engineer</h3>
    <nav>
    <h5>Building Innovative Solutions and Solving Complex problems with code.</h5>
    <ul className='nav-button'>
    <HashLink exact="true" className="nav-link" to="/#work"><li> View My Projects <FontAwesomeIcon icon={faArrowRight} /> </li></HashLink>
    <HashLink exact="true" className="nav-link" to="/#price"><li class="plain-button"> Hire Me </li></HashLink>
    </ul>
    </nav>


    </main>

    <aside className='aside'>
      <img src={Logo} alt="music"/>


    </aside>
    
   

    </section>
    <div class="block">
    <div class="projects">
      <h1> Projects Completed</h1>
      <h2>20+</h2>
    </div>
    </div>

    <Work />
    <TechLogo />
    <Price />
    <Digital />
    <Blog />
    <Footer />
    </div>
    
    </>
     )
}

export default Home