import './index.scss';
import {useState} from 'react';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faNodeJs,
    faSass,
    faVuejs,
    faNpm,
    faPython,
    faNode,
    faGitlab,
    faJira,
    faAws

    


  } from '@fortawesome/free-brands-svg-icons';


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faC} from '@fortawesome/free-solid-svg-icons';




const Tech = () => {
    const [letterClass] = useState('text-animate');

    return (
        <>
        
         <div className="tech-stack">
         <h2 class="header-button">Tech Stack </h2>
         <p> Highly skilled software engineer with extensive experience in a wide range of tech stacks and a deep understanding of industry best practices and software methodologies.</p>
            <div className="face face1">
              <FontAwesomeIcon icon={faAngular} title="Angular" color="#DD0031" flip/>
            </div>
            <div className="face face2">
              <FontAwesomeIcon icon={faHtml5} title="HTML 5" color="#F06529" />
            </div>
            <div className="face face3">
              <FontAwesomeIcon icon={faCss3} title="CSS" color="#28A4D9" />
            </div>
            <div className="face face4">
              <FontAwesomeIcon icon={faReact} title="React" color="#5ED4F4" spin/>
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faJsSquare} title="JavaScript" color="#EFD81D" />
            </div>
            <div className="face face6">
              <FontAwesomeIcon icon={faGitAlt} title="GIT" color="#EC4D28" />
            </div>
            <div className="face face1">
              <FontAwesomeIcon icon={faNodeJs} title="NODE JS" color="#DD0031" />
            </div>
            <div className="face face2">
              <FontAwesomeIcon icon={faNpm} title="NPM"color="#F06529" />
            </div>
            <div className="face face3">
              <FontAwesomeIcon icon={faPython} title="PYTHON" color="#28A4D9" />
            </div>
            <div className="face face4">
              <FontAwesomeIcon alt="Vue" icon={faVuejs} title="VUE" color="#5ED4F4" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faSass} title="SASS" color="#EFD81D" fade/>
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faNode} title="NODE JS" color="#EFD81D" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faC} title="C" color="#EFD81D" spin/>
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faGitlab} title="GITLAB" color="#E24329" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faJira} title="JIRA" color="#0052CC" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faAws} title="AWS" color="#232F3E" beat/>
            </div>
            <ul className='nav-button'>
            <li class="b1"> DEVOPS </li>
            <li class="b2">SOLID </li>
            <li class="b3"> AGILE  </li>
            <li class="b4"> MVC ARCHITECTURE  </li>
            <li class="b5"> UI/UX PROTOTYPES </li>
            <li class="b6"> DATABASE & SECURITY</li>

            </ul>
        </div>
      
      </>
      
    )

}


export default Tech