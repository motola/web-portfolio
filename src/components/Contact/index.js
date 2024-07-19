import React from 'react';
import './index.scss';


const Contact = () => {
    return ( 
        <>
          <div id="contact" className="containers contact-page">
            <div className="text-zone">
            <div>
                <h1>Get in Touch</h1>
              <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
              </p>
              </div>
              <div className="contact-form">
                <form>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                      />
                    </li>
                    <li className="width">
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          
        
        </>
      )

}




export default Contact