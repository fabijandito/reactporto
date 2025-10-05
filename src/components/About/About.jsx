import React from 'react';
import './About.css';
import FotoProfile from '../../assets/AssetPorto/FotoProfile.jpeg';

const About = () => {
  return (
   <div className='about' id="about">
    <div className="title">
        <h1>About Me</h1>
     </div>

        <div className="about-section">
            <div className="about-left">
                <img src={FotoProfile} alt="" />
             </div>
             <div className="about-right">
                <div className="about-para">
                    <p>My name is Fabianus Jandito, a 3rd-year Computer Science student at Binus University.
                        With a growing interest in software engineering, I’m dedicated to strengthening my skills in system design, problem-solving, and building reliable applications.
                        My goal is to contribute to impactful projects while preparing for a professional career in the tech industry.</p>
                    <br />
                    <p>I am also passionate about front-end development, focusing on creating responsive and user-friendly web experiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width : "55%"}} />
                        
                    </div>

                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width : "35%"}} />
                        
                    </div>
                    <div className="about-skill"><p>React.Js</p><hr style={{width : "20%"}} />
                        
                    </div>
                    <div className="about-skill"><p>C</p><hr style={{width : "48%"}} />
                    </div>
                    <div className="about-skill">
                        <p>SQL</p><hr style={{width : "45%"}} />
                    </div>


                </div>

             </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+  </h1>
                <p>On Going Projects.</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3rd-Year CS</h1>
                <p>Student at Binus</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Always</h1>
                <p>Learning & Exploring</p>
            </div>
        </div>
   </div>
  );
};

export default About;