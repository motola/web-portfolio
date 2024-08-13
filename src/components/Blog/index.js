import React from 'react';
import './index.scss';
import ProjectImage1 from '../../assets/images/behaviour.jpg';
import ProjectImage2 from '../../assets/images/system.jpg';


const Blog = () => {

    return (
        <>
        <div id="blog" className="blog-container">
        <div className="r-stack">
         <h2 class="header-button">Blog Posts </h2>
         <p> There are a plethora of exciting things about software engineering, explore some of those valuable writeups here.</p>
        </div>
        


        <div className="blog-article"> 
         <div className='blog-content'>
            <img src={ProjectImage1} alt="project1"/>
          <div className="blog-words">
            <h3><a href="https://www.techinterviewhandbook.org/behavioral-interview-questions/"> The 30 most common Software Engineer behavioral interview questions </a></h3>
            <p> In the software engineer interview process, behavioral interviews may seem so much more varied and unstructured as compared to technical interviews. 
              However, in most cases, the interviewer is actually just trying to get to know you better and there's always a set of common questions that need to be asked to achieve that...</p>
      
         </div>
         </div>

         <div className='blog-content'>
            <img src={ProjectImage2} alt="project2"/>
            <div className="blog-words">
            <h3> <a href="https://medium.com/javarevisited/40-must-read-engineering-blogs-to-learn-system-design-and-software-architecture-in-2024-aaa7c4f71ee6">40 Must Read Engineering Blogs to Learn System Design and Software Architecture in 2024</a></h3>
            <p className="last-border"> 
            Master System design and Software architecture by reading engineering blogs from top tech companies. 
            Hello guys, mastering System design and software architecture is hard as they are very vast and there are a lot of concepts in play. I have been doing programming for close to 25 years now and I have worked on all kind of applications like starting from 
            tiny 10KB mobile applications to monolithic applications where it take 30 minutes to just checkout the code... 
            </p>
         </div>
         </div>

        </div>
        
        </div>
        </>
    )

}

export default Blog

