import React, { useState } from 'react';
import './Certif.css';
import Certif_Data from '../../assets/certif_data';

const Certif = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='Certif' id="certi">
      <div className="Certif-title">
        <h1>Certificate & Activity</h1>
      </div>

      <div className="certif-container">
        {Certif_Data.map((certif, index) => {
          return (
            <img
              key={index}
              src={certif.img}
              alt=""
              onClick={() => setSelectedImg(certif.img)} // klik gambar
            />
          );
        })}
      </div>

  



      {/* POPUP */}
      {selectedImg && (
        <div className="popup" onClick={() => setSelectedImg(null)}>
          <div className="popup-inner">
            <img src={selectedImg} alt="popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certif;
