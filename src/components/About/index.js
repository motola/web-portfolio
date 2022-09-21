import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
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


  } from '@fortawesome/free-brands-svg-icons';


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const About = () => {
    const [letterClass] = useState('text-animate');

    return (
        <>
        <div id="about" className='container about-page '>
         <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t', ' ', 'm', 'e']} 
          idx={15} />
         </h1>

         <p>Hello! My name is Akinola Olutola, I love innovating and creating solutions that makes live better and more convenient for people around the globe, mostly internet related.</p>

         <p>Although I have a medical background I have always been fascinated by how the internet works and how it influences everything we do as humans and that has motivated me to delve into software engineering. My creativity, curiousity, passion and instinct as brought me to a stage where I am fully now a software Engineer. </p>
        
        </div>
     
         <div className="tech-stack">
         <p> Here are some few technologies I currently use to create amazing things on the web. </p>
            <div className="face face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face face2">
              <FontAwesomeIcon icon={faNpm} color="#F06529" />
            </div>
            <div className="face face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face face4">
              <FontAwesomeIcon alt="Vue" icon={faVuejs} color="#5ED4F4" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faSass} color="#EFD81D" />
            </div>
            <div className="face face5">
              <FontAwesomeIcon icon={faNode} color="#EFD81D" />
            </div>
        </div>
      
      </>
      
    )

}


export default About