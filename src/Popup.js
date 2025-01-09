// Popup.js 
import React from 'react'; 
import './styles.css'; 

const Popup = ({ message, onClose }) => { 
    return ( <> <div className="overlay" onClick={onClose}></div>
     <div className="popup"> <p>{message}</p>
      <button onClick={onClose}>Close</button> </div> </> ); };
      
      
      export default Popup;