import React from 'react'; 

 const DisguisedImageViewer = ({ disguisedImage }) => { return ( <div className="disguised-image-viewer">
    
     <h2>Disguised Image</h2> <img src={disguisedImage} alt="Disguised" /> </div> ); 
     
    };
     
     
     export default DisguisedImageViewer;