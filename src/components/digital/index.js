import './index.scss';
import myPics from '../../assets/images/digital.jpg';
import React, {useEffect} from 'react';





const About = () => {

  useEffect(() => {
    (function(w, d, e, u, f, l, n) {
      w[f] = w[f] || ((...args) => (w[f].q = w[f].q || []).push(args));
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
    
    window.ml('account', '1085681');
  }, []);

    return (
        <>
        <div id="digital" className='container about-page '>
          <div className="about-stack">
         <h2>Go Fully Digital</h2>
         <p> Successful businesses are those that effectively leverage technology to serve their customers and swiftly adapt to growing industry demands by combining the right people with the right tools.
           </p>
          <p>I've curated a comprehensive digital package tailored to your needs, including website development, design, SEO, email setup, cloud solutions, databases, and much more—so you can focus on what matters most to your business while we handle the rest. </p>
          <h5><button onClick={() => window.ml('show', '81Wfdj', true)}>Explore </button></h5>
          </div>
        
     
         <div className="digital-pics">
         <img src={myPics} alt="Akinola Olutola"/>
        </div>
        </div>
      </>
      
    )

}


export default About