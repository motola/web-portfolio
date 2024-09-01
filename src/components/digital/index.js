import './index.scss';
import {faGear, faWandMagicSparkles,faSnowflake, faCodeCompare} from'@fortawesome/free-solid-svg-icons';
import myPics from '../../assets/images/digital.jpg';

import Footer from '../Footer';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const About = () => {


    return (
        <>
        <div id="about" className='container about-page '>
          <div className="about-stack">
         <h2>Go Fully Digital</h2>
         <p> Successful businesses are those that effectively leverage technology to serve their customers and swiftly adapt to growing industry demands by combining the right people with the right tools.
           </p>
          <p>I've curated a comprehensive digital package tailored to your needs, including website development, design, SEO, email setup, cloud solutions, databases, and much more—so you can focus on what matters most to your business while we handle the rest. </p>
          <h5><a href=''>Explore </a></h5>
          </div>
        
     
         <div className="digital-pics">
         <img src={myPics} alt="Akinola Olutola"/>
        </div>
        </div>
      </>
      
    )

}


export default About