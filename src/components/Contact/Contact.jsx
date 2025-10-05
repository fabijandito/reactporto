import React from 'react'
import './Contact.css';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Connect With Me</h1>
        </div>

        <div className="contact-section">

            <div className="contact-left">

                <h1>My Contact</h1>
                <p>I’m eager to apply my skills and keep learning through real-world projects. If you have something in mind where I can contribute, don’t hesitate to drop me a message.</p>

                
                 <div className="contact-details">
                    <div className="contact-detail">

                   
                    <FaWhatsapp className='contact-icon'/>

                    <a href="https://wa.me/qr/PVYNUPCXGYXRF1">0813-1182-6032</a>
                  
                    </div>

                     <div className="contact-detail">
                    <MdEmail className='contact-icon'/>

                    <a href="mailto:fabijandito7a@gmail.com">fabijandito7a@gmail.com</a>
                   
                    
                        </div>
                </div>



            </div>

            <div className="contact-right">
                <h1> Let Us Connect</h1>
                <p>Find me on professional platforms and let's collaborate via LinkedIn or GitHub.</p>


                <div className="contact-details">
                    <div className="contact-detail">

                   
                        <FaLinkedin className='contact-icon'/>

                        <a href="https://www.linkedin.com/in/fabianus-jandito-47223a365">Fabianus Jandito</a>
                  
                    </div>

                     <div className="contact-detail">
                        <FaGithub className='contact-icon'/>

                        <a href="https://github.com/fabijandito">fabijandito</a>
                   
                    
                    </div>
                </div>

            

            </div>

           
        </div>
    </div>
  );
};

export default Contact
