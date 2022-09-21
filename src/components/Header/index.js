import './index.scss';
import { NavLink, Link } from 'react-router-dom';
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
                <NavLink exact="true" className="nav-link" to="/Resume"><li> Work</li></NavLink>
                <NavLink exact="true" className="nav-link" to="/Blog"><li>Blog</li></NavLink>
                <a href={pdfFile} target = "_blank" rel="noreferrer" className="nav-link"><li> Resume </li></a>
                <NavLink exact="true" className="nav-link" to="/Contact"><li>Contact</li></NavLink>      
            </ul>
           </nav>
       </div>
       <Link><div class="right_section"><h2>Pro Bono </h2></div></Link>
        
      </header>
      </div>
    )
}

export default Header