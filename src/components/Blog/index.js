import React from 'react';
import './index.scss';
import ProjectImage1 from '../../assets/images/project-one.jpg';
import ProjectImage2 from '../../assets/images/project-two.jpg';


const Blog = () => {

    return (
        <>
        <div id="blog" className="blog-container">
        <div className="tech-stack">
         <h2 class="header-button">Blog Posts </h2>
         <p> Read about things that I have written
        and some others I find fascinating on the web </p>
        </div>
        


        <div className="blog-article"> 
         <div className='blog-content'>
            <img src={ProjectImage1} alt="project1"/>
          <div className="blog-words">
            <h3><a href="https://www.medium.com//p/d9f80339f6bf"> Why having Values can set you apart as a Software Engineer. </a></h3>
            <p> Every individual and every organisation is involved in making hundreds of decisions every day. The decisions we make are a reflection of our values and beliefs, and they are always directed towards a specific purpose. </p>
         </div>
         </div>

         <div className='blog-content'>
            <img src={ProjectImage2} alt="project2"/>
            <div className="blog-words">
            <h3> <a href="https://www.freecodecamp.org/news/how-to-code-coding-for-beginners-and-how-to-learn-programming-for-free/">Coding for Beginners and How to Learn Programming for Free</a></h3>
            <p className="last-border"> These days, there are a lot resources out there for learning how to code. And many of them are readily available online for free – so choosing one can be overwhelming. </p>
         </div>
         </div>

        </div>
        
        </div>
        </>
    )

}

export default Blog

