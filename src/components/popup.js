import React from 'react';
import './popup.css'; 
import { useState } from 'react';
import { useEffect } from 'react';
const Popup = ({ onClose }) => {

  const [name, setname] = useState("")
  const [mac, setmac] = useState("")

  useEffect(() => {


    const dev = localStorage.getItem('dev')
    const ma = localStorage.getItem("mac")
    if(dev || ma)
    {
      setname(dev)
      setmac(ma)
    }
  
  }, [])


  return (

    <div className="popup-container">
      <div className="popup">
        <h2>Device</h2><br></br>
        <div className='container'>
        <div className='buttons'>
        <p>Device Name:</p>
        <p className='inf'>{name}</p>
        <p>Device IP:</p>
        <p className='inf'>{mac}</p>
        <button onClick={onClose}>Close</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
