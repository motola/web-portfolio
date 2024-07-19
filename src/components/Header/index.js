import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faArrowRight,faBrain} from '@fortawesome/free-solid-svg-icons';
import {HashLink} from 'react-router-hash-link';
import { useState } from 'react';

const Header = () => {
   const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className='App'>
        <header>
        <div className="left_section">
           <NavLink exact to="/" activeClassName="active" className="nav-link"> <h1 id="header_2"> <FontAwesomeIcon icon={faBrain} size="xs" bounce/> Akinola.</h1></NavLink>
         
        
        </div>
        <button className="menu-icon"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}>
          <FontAwesomeIcon  icon={faHamburger} />
        </button>
        <div className={isNavExpanded ? "middle_section" : "middle-section2"}>
            <nav id="nav-bar">
            <ul>
                
                <NavLink exact="true" className="nav-link" to="/About"><li>About </li></NavLink>
                <HashLink exact="true" className="nav-link" to="/#work"><li> Work</li></HashLink>
                <HashLink exact="true" className="nav-link" to="/#blog"><li>Blog</li></HashLink>
                <li><a href="mailto:olutolamoses@gmail.com">Contact </a></li>
            </ul>
           </nav>
       </div>
       <div className={
          isNavExpanded ? "right_section nav-2" : "right-section2"
        }><h2><HashLink exact="true" className="nav-link" to="/#price"><li>Hire Me <FontAwesomeIcon icon={faArrowRight} /></li></HashLink> </h2></div>
        
      </header>
      </div>
    )
}

export default Header