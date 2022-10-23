import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import {HashLink} from 'react-router-hash-link';
import pdfFile from '../../assets/documents/cv.pdf'
import { useState } from 'react';

const Header = () => {
   const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className='App'>
        <header>
        <div className="left_section">
            <h1 id="header_2">Akinola.</h1>
         
        
        </div>
        <button className="menu-icon"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}>
          <FontAwesomeIcon  icon={faHamburger} />
        </button>
        <div className={
          isNavExpanded ? "middle_section" : "middle-section2"
        }>
            <nav id="nav-bar">
            <ul>
                
                <HashLink exact="true" className="nav-link" to="/#about"><li>About </li></HashLink>
                <HashLink exact="true" className="nav-link" to="/#work"><li> Work</li></HashLink>
                <NavLink exact="true" className="nav-link" to="/Blog"><li>Blog</li></NavLink>
                <HashLink exact="true" className="nav-link" to="/#contact"><li> Contact </li></HashLink> 
            </ul>
           </nav>
       </div>
       <div className={
          isNavExpanded ? "right_section nav-2" : "right-section2"
        }><h2> <a href={pdfFile} target = "_blank" rel="noreferrer">Resume </a> </h2></div>
        
      </header>
      </div>
    )
}

export default Header