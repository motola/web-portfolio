import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEarth} from '@fortawesome/free-solid-svg-icons';


const Blog = () => {

    return (
        <>
        <div className="blog-container">
        <h1> My Blogpost  </h1>
        <h2> Read about things that I have written
        and some others I find fascinating on the web </h2>


        <div className="blog-article"> 
         <div className='blog-content'>
            <h3>Why having Values can set you apart as a Software Engineer. <span className="blog-link"><a href="https://www.medium.com//p/d9f80339f6bf"> <FontAwesomeIcon icon={faEarth} color="rgb(42, 210, 81)" /> </a> </span></h3>
            <p> Every individual and every organisation is involved in making hundreds of decisions every day. The decisions we make are a reflection of our values and beliefs, and they are always directed towards a specific purpose. </p>
         </div>

         <div className='blog-content'>
            <h3> Coding for Beginners and How to Learn Programming for Free<span className="blog-link"><a href="https://www.freecodecamp.org/news/how-to-code-coding-for-beginners-and-how-to-learn-programming-for-free/"> <FontAwesomeIcon icon={faEarth} color="rgb(42, 210, 81)" /> </a> </span></h3>
            <p className="last-border"> These days, there are a lot resources out there for learning how to code. And many of them are readily available online for free – so choosing one can be overwhelming. </p>
         </div>

        </div>
        
        </div>
        </>
    )

}

export default Blog

