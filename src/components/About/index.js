import './index.scss';
import {faGear, faWandMagicSparkles,faSnowflake, faCodeCompare} from'@fortawesome/free-solid-svg-icons';
import myPics from '../../assets/images/about.jpg';
import Footer from '../Footer';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const About = () => {


    return (
        <>
        
        <div className="tech-stack about1">
        <h2 class="header-button">About Me </h2>
        </div>
        <div id="about" className='container about-page '>
          <div class="about-stack">
         <h1>Hello! My name is Akinola Olutola</h1>
         <p> I am a passionate and dedicated professional with a strong academic and practical background in technology. Holding a Master's degree in Artificial Intelligence and Data Analytics, I have honed my expertise in some of the most cutting-edge and impactful areas of computer science. Over the past two and a half years, I have worked as a full stack engineer, 
          gaining invaluable experience in developing robust and scalable web applications. </p>
          <p>My technical skills are complemented by a deep love for music, which fuels my creativity and provides a unique perspective on problem-solving. I believe that the discipline required in mastering an instrument is akin to the precision needed in writing clean and efficient code. This blend of creativity and 
            technical proficiency allows me to approach challenges with 
            a balanced and innovative mindset.</p>
          </div>
        
     
         <div className="about-pics">
         <img src={myPics} alt="Akinola Olutola"/>
        </div>
        </div>

        <div className="tech-stack">
        <h2 class="header-button about2">My Work Values </h2>
        </div>
        <div id="about" className='about-bottom'>
        <div class="about-work">
         <p><FontAwesomeIcon icon={faGear} size="2xl" color="#2F70ED" /></p>
         <h1>Everything is a System</h1>
          <p>Although I have a medical background I have always been fascinated by how the internet works and how it influences everything we do as humans and that has motivated me to delve into software engineering. My creativity, curiousity, passion and instinct as brought me to a stage where I am fully now a software Engineer.</p>
          </div>
         <div class="about-work">
         <p><FontAwesomeIcon icon={faWandMagicSparkles} size="2xl" color="#2F70ED" /></p>
         <h1>Minimalism</h1>
          <p>I aim always to create a design that emphasizes simplicity and elegance, by eliminating unnecessary elements and features, I strive to achieve a clean and uncluttered user experience and this approach enhances usability, reduces cognitive load, and promotes a sense of calm and clarity for the users.</p>
          </div>
          <div class="about-work">
         <p><FontAwesomeIcon icon={faSnowflake} size="2xl" color="#2F70ED" /></p>
         <h1>Seek Clarity Always</h1>
          <p>I am always driven to achieve clarity and eliminate ambiguity when facing design challenges. My focus is on conveying information clearly to users and ensuring intuitive actions for a seamless user experience.</p>
          </div>
   
          <div class="about-work">
          <p><FontAwesomeIcon icon={faCodeCompare} size="2xl" color="#2F70ED" /></p>
          <h1>Never Stop Iterating</h1>
           <p>I firmly believe in the power of iteration in design. I strive to maximize iteration by validating design decisions at various stages of the process, leading to impactful results.</p>
           </div>
          </div>
        
        
          <Footer />
      </>
      
    )

}


export default About