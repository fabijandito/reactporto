import React from 'react';
import './Hero.css';
import FotoProfile from '../../assets/AssetPorto/FotoProfile.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero' id="home">
      <motion.img
        src={FotoProfile}
        alt="Foto Profil"
        className="hero__img"
        whileHover={{ y: -6, scale: 1.02, boxShadow: '0 22px 50px rgba(0,0,0,0.45)' }}
        transition={{ type: 'spring', stiffness: 200, damping:18 }}
      />
      <h1><span>I'm Fabianus,</span> CS Undergraduate • Software Engineer Learner </h1>
      <p>I'm a 5th semester Computer Science student at Binus University (3rd year). 
      Excited to learn and grow in software engineering.
      
      </p>


      <div className='hero-action'>
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">
          <a href="https://drive.google.com/drive/folders/1bi7AfAAj_6gz9muQIl67oSpbTBNdB2p_?usp=sharing">My CV</a></div>

      </div>
    </div>
  );
};

export default Hero;