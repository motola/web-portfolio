import './index.scss';
import { NavLink } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import pdfFile from '../../assets/documents/cv.pdf'

const Header = () => {
    return (
        <div className='App'>
        <header>
        <div class="left_section">
            <h1 id="header_2">Akinola.</h1>
         
        
        </div>
        <div class="middle_section">
            <nav id="nav-bar">
            <ul>
                <HashLink exact="true" className="nav-link" to="/#about"><li>About </li></HashLink>
                <HashLink exact="true" className="nav-link" to="/#work"><li> Work</li></HashLink>
                <NavLink exact="true" className="nav-link" to="/Blog"><li>Blog</li></NavLink>
                <HashLink exact="true" className="nav-link" to="/#contact"><li> contact </li></HashLink> 
            </ul>
           </nav>
       </div>
       <div class="right_section"><h2> <a href={pdfFile} target = "_blank" rel="noreferrer" className="nav-link">Resume </a> </h2></div>
        
      </header>
      </div>
    )
}

export default Header