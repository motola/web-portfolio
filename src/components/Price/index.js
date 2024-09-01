import './index.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';

const Price = () => {

  const openCalendlyPopup = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/olutolamoses?background_color=66b1ef&text_color=fbfbfb',
     
    });
    return false;
  };
    return (
        <>
        
         <div className="price-stack">
         <h2 className="price-button">Pricing </h2>
         <p id="price"> Simple Plans, no surprises.</p>
         </div>
         <div className='price-container'>
          <nav className="price-tab no-line">
            <div className='nav-top top1'>
            <h1>Basic</h1>
            <p> Have an idea? Take action now.</p>
            {/* <button><a href="mailto:olutolamoses@gmail.com?subject=Free Consulting Services">Get 30 mins Free</a></button> */}
            <button onClick={openCalendlyPopup}><a href="#!">Get 30 mins Free</a></button>
            </div>
         
            <div className='nav-bottom'>
            <ul>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B" /> Cloud Computing</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Product Managment</li>
              <li> <FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Front-End Services</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Back-End Services</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Hosting and Deployment</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Development Operations</li>
              <li> <FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Best Security Practices</li>
            </ul>
            </div>
            </nav>
            
            <nav className="price-tab">
            <div className='nav-top'>
            <h1>Business</h1>
            {/* <h3> &#163; Billed <span className="drop">/hour </span></h3> */}
            <h3> &#163; Billed <span className="drop">/hour </span></h3>
            <button className='button-color' onClick={openCalendlyPopup}><a href="#!">Book Me</a></button>
            </div>
            <div className='nav-bottom'>
            <ul>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B" /> Web Development Project</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> DevOps</li>
              <li> <FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Full Stack Services</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Front-End & Back-End Dev</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Project Planning</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Support Team </li>
              <li> <FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Limited Meeting</li>
            </ul>
            </div>
            </nav>
            <nav className="price-tab">
            <div className='nav-top'>
            <h1>Pro</h1>
            <h3> &#163; Billed <span className="drop">/hour </span> </h3>
            <button className='button-color' onClick={openCalendlyPopup}><a href="#!">Book Me</a></button>
            </div>
            <div className='nav-bottom'>
            <ul>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B" /> Inclusive Business Tier</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Unlimited Meetings & Calls</li>
              <li> <FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Dedicated Support Team</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Back-End Services</li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Hosting and Deployment </li>
              <li><FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Cloud Operations</li>
              <li> <FontAwesomeIcon icon={faCircleCheck} color="#5ECC8B"/> Rebuilding Projects</li>
            </ul>
            </div>
            </nav>
            </div>
      </>
      
    )

}


export default Price