import './index.scss';
import ProjectImage1 from '../../assets/images/AI.jpg';
import ProjectImage2 from '../../assets/images/ward.jpg';
import ProjectImage3 from '../../assets/images/stack.jpg';
import ProjectImage4 from '../../assets/images/pay.jpg';
import ProjectImage5 from '../../assets/images/note.jpg';
import ProjectImage6 from '../../assets/images/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub
  } from '@fortawesome/free-brands-svg-icons';
  import {faGlobe} from '@fortawesome/free-solid-svg-icons';




const Work = () => {


    return (
        <>
        <div id="work" className='work-container'>

        <h3 class="head-1"> Here are featured Projects I have worked on </h3>
        <p><a href="https://www.github.com/motola"> view other projects on github</a> </p>

        <ul className='large-3'>
        <li className="project">
        <img src={ProjectImage1} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/api-support-dns-devops">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
         <h3>AI Website Builder</h3>     {/*  1 */}
        </div>
        <h5> 
             A Stealth Mode Start-up for competitive reasons, they are building an AI Website Builder 
            designed to democratize web development, bringing powerful tools and automation to everyone's 
            fingertips, from seasoned developers to small business owners with no coding experience.
        </h5>
        <h5> 
        I mostly worked on features pertaining to automatic merging and git integration 
        of AI generated codebase to a unique deployment service instance, mostly CloudFlare Pages. 
       
        </h5>
        <h5>
        Followed by adding domain name types such as a subdomain from the platform's main domain, customer's 
        custom domain or subdomain to CloudFlare Pages and resolving them via DNS record types by CNAME Flattening, A or AAAA types. 
        </h5>
        <ul class="project-footer">
        <li> NODEJS </li>
        <li> EXPRESS </li>
        <li> MVC </li>
        <li> POSTMAN </li>
        <li> FETCH API </li>
        <li> AXIOS </li>
        </ul> 
        </li>
        
 
        <li className="project">
        <img src={ProjectImage2} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/Weather_API">
    <FontAwesomeIcon icon={faGithub} color="white"/> 
       </a>
       <h3> Ward (Weather web Application) </h3>  {/*  2 */}
       </div>
        
        <h5> Ward is a weather Web Application with road safety guidelines and tips for users. Features an implemented mock AI response for each weather metrics based on user's Input. </h5>
        <h5> A Five-day weather forecast showing with different time intervals of different cities based on user's search, infused with an AI journey-assistant</h5>
            
        <h5> The integrated AI journey-assistant offers travel advice based on weather conditions.
        The assistant suggests activities, travel tips, and necessary preparations for various weather
         scenarios, enhancing user experience by making travel planning more efficient and informed.
</h5>   
        <h5>Users receive up-to-date weather information, including temperature, humidity, wind speed, and precipitation.</h5>
        <ul class="project-footer">
        <li> JAVASCRIPT </li>
        <li> FETCH API </li>
        <li> HTML5/CSS3</li> <br/>
       
        </ul>  
        </li>

        <li className="project">
        <img src={ProjectImage3} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/stackoverflow-API   ">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
        <h3> Stackoverflow API </h3>   {/*  3 */}
        </div>
        <h5> Built a stackoverflow backend API that performs all basic CRUD operations that runs on the stackoverflow application, integrated authentication with Jsonwebtoken and persisting data with NoSql database. </h5>
        <h5> Stack Overflow is a popular online platform where developers and programmers can ask and
        answer technical questions. It is a part of the Stack Exchange network and focuses 
        specifically on topics related to programming and software development.  </h5>

        <h5>Users can post questions, provide 
        answers, and vote on
        the quality of questions and answers, helping to build a community-driven knowledge base.</h5>
        <ul class="project-footer">
        <li> NODEJS </li>
        <li> MONGODB </li>
        <li> EXPRESSJS </li>
        <li> MONGOOSE </li>
        <li> JWT </li>
        </ul> 
        </li>
        </ul>
        <ul className='large-3'>
        <li className="project cut">
        <img src={ProjectImage4} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://www.grovepay.co.uk/">
        <FontAwesomeIcon icon={faGlobe} color="white" /> 
       </a>
        <h3> Grove Pay</h3>   {/*  4 */}
        </div>
        <h5> Grovepay is a Financial Technological Application that makes payment processing simple, secure, and efficient for businesses of all sizes  </h5>
        <h5> Implemented an Automated reconciliation application which is a sophisticated tool designed to
            streamline the process of reconciling financial transactions. 
            The application features a user-friendly interface for administrators to monitor 
            reconciliation statuses and details, ensuring efficiency and accuracy in financial management. </h5>
        <h5>Implemented complex reconciliation logic in the backend using Python.
        Integrated with PostgreSQL for efficient data storage and retrieval, ensuring reliable performance and scalability</h5>
        <ul class="project-footer">
        <li> Python </li>
        <li> Flask </li>
        <li> React </li>
        <li> PostgreSQL </li>
        <li> SQL Alchemy </li>
        
        </ul> 
        </li>
        
 
        <li className="project cut">
        <img src={ProjectImage5} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/react-markdown-notes-app">
    <FontAwesomeIcon icon={faGithub} color="white"/> 
       </a>
       <h3> React Notes Application </h3>  {/*  5 */}
       </div>
        
        <h5> The React Notes Application is a dynamic and responsive web application that allows users to create, edit, view, and delete notes. This project demonstrates proficiency in front-end development using React and showcases an ability to manage application state effectively.. </h5>
        <h5> The application is structured into several components, each responsible for a specific part of the functionality. This modular approach helps in maintaining and scaling the application. </h5>
        
        <h5>Other implemented features are a component-based Architecture that involves building reusable and maintainable components,
        state Management for efficiently managing state with React hooks and a 
      responsive Design ensuring the application is accessible on various devices.</h5><ul class="project-footer">
        <li> React </li>
        <li> FireBase </li>
        <li> Webpack </li>
        <li> Netlify</li>
        <li> JSX</li>
        </ul>  
        </li>

        <li className="project cut">
        <img src={ProjectImage6} alt="music"/>
        <div class="brand-line">
        <a exact="true" activeclassname="active" className="about-link" href="https://github.com/motola/meekshire">
        <FontAwesomeIcon icon={faGithub} color="white" /> 
       </a>
        <h3> Meekshire </h3>  {/*  6 */}
        </div>
        <h5> An ongoing project our aim is to develop an online shopping platform that’s not only efficient and fast but also easy to use and aesthetically pleasing. We wanted to prove that cutting-edge user experiences don't necessarily require complex frameworks, but can be achieved with the right blend of classic web technologies. </h5>
        <h5> From the navigation bar to product cards, and from the shopping cart to the checkout form, each component was styled meticulously. We used modern CSS techniques such as Flexbox and Grid to ensure layouts were both flexible and robust. </h5>
        <h5>Instead of relying on traditional page loads, we implemented client-side routing with JavaScript. This allowed us to create a single-page experience where users can navigate between sections without any page refreshes.</h5><ul class="project-footer">
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