import './index.scss';
import ProjectImage1 from '../../assets/images/project-one.jpg';
import ProjectImage2 from '../../assets/images/project-two.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub
  } from '@fortawesome/free-brands-svg-icons';




const Work = () => {


    return (
        <>
        <div id="work" className='work-container'>

        <h3 class="head-1"> Here are some of the Projects I have worked on </h3>
        <p><a href="https://www.github.com/motola"> view other projects on github</a> </p>

        <ul className='large-3'>
        <li className="project">
        <img src={ProjectImage1} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/stackoverflow-API">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
        <h3>Stackoverflow API </h3>
        </div>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <ul class="project-footer">
        <li> Node.js </li>
        <li> MongoDB </li>
        <li> Express.js </li>
        <li> Mongoose</li>
        </ul> 
        </li>
        
 
        <li className="project">
        <img src={ProjectImage2} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/Store-API">
    <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
       <h3> Store API </h3>
       </div>
        
        <h5> Created a store API with necesary endpoints needed to implementing pagination and fetching products based on a static filter. </h5>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <ul class="project-footer">
        <li> Node.js </li>
        <li> MongoDB </li>
        <li> Express.js </li>
        <li> Mongoose</li>
        </ul>  
        </li>

        <li className="project">
        <img src={ProjectImage1} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/stackoverflow-API   ">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
        <h3>Stackoverflow API </h3>
        </div>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <ul class="project-footer">
        <li> Node.js </li>
        <li> MongoDB </li>
        <li> Express.js </li>
        <li> Mongoose</li>
        </ul> 
        </li>
        </ul>
        <ul className='large-3'>
        <li className="project">
        <img src={ProjectImage1} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/stackoverflow-API   ">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
        <h3>Stackoverflow API </h3>
        </div>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <ul class="project-footer">
        <li> Node.js </li>
        <li> MongoDB </li>
        <li> Express.js </li>
        <li> Mongoose</li>
        </ul> 
        </li>
        
 
        <li className="project">
        <img src={ProjectImage2} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/Store-API">
    <FontAwesomeIcon icon={faGithub}/> 
       </a>
       <h3> Store API </h3>
       </div>
        
        <h5> Created a store API with necesary endpoints needed to implementing pagination and fetching products based on a static filter. </h5>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <ul class="project-footer">
        <li> Node.js </li>
        <li> MongoDB </li>
        <li> Express.js </li>
        <li> Mongoose</li>
        </ul>  
        </li>

        <li className="project">
        <img src={ProjectImage1} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/stackoverflow-API   ">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
        <h3>Stackoverflow API </h3>
        </div>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisted data with a NoSql database. </h5>
        <ul class="project-footer">
        <li> Node.js </li>
        <li> MongoDB </li>
        <li> Express.js </li>
        <li> Mongoose</li>
        </ul> 
        </li>
        </ul>
    {/*

        <li className="projects"> 
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/TaskManagerApp">
    <FontAwesomeIcon icon={faGithub} color="rgb(42, 210, 81)" /> 
       </a>
        <h3> Task Manager API </h3>
        <h5> Developed backend functionalities needed to build a task manager application that manages business schedules across different time zones. </h5>
        <p className='text'> Node.js MongoDB Express.js Mongoose </p>    
        </li>

        </ul>

        <ul className='large-3'>
        <li className="projects frontend-1">
        <a exact="true" activeclassname="active" className="about-link" href="https://whimsical-starlight-9d0f31.netlify.app">
    <FontAwesomeIcon icon={faEarth} color="rgb(42, 210, 81)" /> 
       </a>
        <h3>My Webportfolio Version 1.0 </h3>
        <h5> The first version of my website that showcases most things I have built and I am building for the web.  </h5>
        <p className='text'> React Sass Javascript Html5 CSS Hooks </p>    
        </li>

        <li className="projects frontend-2"> 
        <a exact="true" activeclassname="active" className="about-link" href="https://playful-lebkuchen-f6e0f5.netlify.app/">
    <FontAwesomeIcon icon={faEarth} color="rgb(42, 210, 81)" /> 
       </a>
        <h3> Random User Generator </h3>
        <h5> Played around the vue.js framework and created a random user generator with their pictures and email from a public API. </h5>
        <p className='text'> Vue.js FetchAPI Html5 CSS </p>    
        </li>

        <li className="projects frontend-2"> 
        <a exact="true" activeclassname="active" className="about-link" href="https://playful-pothos-51f839.netlify.app/">
        <FontAwesomeIcon icon={faEarth} color="rgb(42, 210, 81)" /> 
       </a>
        <h3> NetFlix Homepage Clone </h3>
        <h5> Re-created the famous Netflix streaming movie platform web Homepage.</h5>
        <p className='text'> Html5 CSS </p>    
        </li> */}

       

        </div>


        </>
    );

}


export default Work