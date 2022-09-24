
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './index.scss';

// import { exportDefaultDeclaration } from '@babel/types'


const Contact = () => {
    const [letterClass] = useState('text-animate');
    const refForm= useRef();

    const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm('service_xwfca3b', 'contact-form', refForm.current, 'XzmDfsT_a1d_uc3sN')
     .then(() => {
      alert("Message sucessfully Sent");
      window.location.reload(false);
     },
     () => {
      alert('Failed to send the message, please try again')
     }
     
     
     );

    }

 
   

    return (
        
        <>
          <div id="contact" className="containers contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e',]}
                  idx={15}
                />
                <span className='green'> <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['.']}
                  idx={25}
                /></span>
              </h1>
              <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
              </p>
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
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
            <div className="info-map">
           Akinola Olutola
          <br />
          Lagos, Nigeria
          <br />
          4, Olutola Street, <br />
          Ojodu Abiodun <br />
          <br />
          <span>olutolamoses@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        </div>
          </div>
          
        
        </>
      )

}




export default Contact