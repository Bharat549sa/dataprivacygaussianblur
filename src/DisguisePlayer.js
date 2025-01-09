// DisguisePlayer.js
import React, { useRef, useState } from 'react';
import './styles.css';
import DisguisedImageViewer from './DisguisedImageViewer'; 
 import Popup from './Popup';
const DisguisePlayer = ({ player, onDisguise }) => {
  const canvasRef = useRef(null);
  const disguisedImageCanvasRef = useRef(null);
  const [disguiseType, setDisguiseType] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [savedPassword, setSavedPassword] = useState('');
  const [showMainContainer, setShowMainContainer] = useState(true);
  const [disguisedImage, setDisguisedImage] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); 
  const [popupMessage, setPopupMessage] = useState('');
  const [showAgentPopup, setShowAgentPopup] = useState(false);


  const applyDisguise = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = player.src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      if (disguiseType === 'blur') {
        ctx.filter = 'blur(10px)';
        ctx.drawImage(img, 0, 0);
      } else if (disguiseType === 'scribble') {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();
      } else if (disguiseType === 'fullColor') {
        ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (disguiseType === 'gaussianblur') {
        const width = canvas.width;
        const height = canvas.height;
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const kernel = [
          [1, 4, 7, 4, 1],
          [4, 16, 26, 16, 4],
          [7, 26, 41, 26, 7],
          [4, 16, 26, 16, 4],
          [1, 4, 7, 4, 1]
        ];
        const kernelSize = 5;
        const kernelSum = 273;

        const applyKernel = (x, y) => {
        let r = 0, g = 0, b = 0;
        for (let ky = 0; ky < kernelSize; ky++) {
          for (let kx = 0; kx < kernelSize; kx++) {
            const px = (x + kx - 2) * 4;
            const py = (y + ky - 2) * width * 4;
            const weight = kernel[ky][kx];
            r += data[px + py] * weight;
            g += data[px + py + 1] * weight;
            b += data[px + py + 2] * weight;
          }
        }
        return [r / kernelSum, g / kernelSum, b / kernelSum];
        };

        for (let y = 2; y < height - 2; y++) {
          for (let x = 2; x < width - 2; x++) {
            const [r, g, b] = applyKernel(x, y);
            const index = (x + y * width) * 4;
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
          }
        }


        ctx.putImageData(imageData, 0, 0);
      }
    };
  };

  const handleDisguiseChange = (event) => {
    setDisguiseType(event.target.value);
  };
  const selectAgent = (agent) => { 
    setAgentMessage(`Do you want to select ${agent} as your agent?`);
   setShowAgentPopup(true);
   }; 
   
  
/*   const checkPassword = () => {
     const enteredPassword = document.getElementById('passwordInput').value; 
    if (enteredPassword === originalPassword) {
       setPasswordMessage('Password is correct!'); } 
    else { setPasswordMessage('Password is incorrect!'); }
     setShowPasswordPopup(true); 
    }; */

  const handleMoreInfoToggle = () => { 
    setShowMoreInfo(!showMoreInfo); };


  const handleCrackPassword = () => {
    const userInput = prompt('Enter something to crack the password:');
    if (userInput) {
      setSavedPassword(userInput);
      alert('Password saved for later.');
    }
  };
  const handleSubmit = () => { 
    const disguisedImageCanvas = disguisedImageCanvasRef.current;
    const disguisedImageContext = disguisedImageCanvas.getContext('2d');
    const img = new Image();
    img.src = player.src;
    disguisedImageCanvas.width = img.width;
    disguisedImageCanvas.height = img.height;
    disguisedImageContext.drawImage(canvasRef.current, 0, 0);
    setShowMainContainer(false);
    // const disguisedImage = canvasRef.current.toDataURL();
    //setDisguisedImage(disguisedImage);
    // onDisguise(disguisedImage); 
    
    // window.open(disguisedImage, '_blank'); 
  };
  const handleImageClick = () => { 
    setPopupMessage('Do you want to select this as an agent?'); 
    setShowPopup(true); };
  const handlePasswordCheck = () => { 
    const userInput = prompt('Enter the password:'); 
    if (userInput === savedPassword) {
       setPopupMessage('Correct password!'); } else {
         setPopupMessage('Incorrect password!'); } 
         setShowPopup(true); };
   const closePopup = () => { 
    setShowPopup(false);  
 };
  return (
    <div className="container">
      <div style={{ display: showMainContainer ? 'block' : 'none' }}>
        <h2>Disguise Player</h2>
        <canvas ref={canvasRef} className="image"></canvas>
        <div className="input-container">
          <label>
            <input
              type="radio"
              value="blur"
              checked={disguiseType === 'blur'}
              onChange={handleDisguiseChange}
            />
            Blur Face
          </label>
          <label>
            <input
              type="radio"
              value="gaussianblur"
              checked={disguiseType === 'gaussianblur'}
              onChange={handleDisguiseChange}
            />
            Gaussian Blur Face
          </label>
          <label>
            <input
              type="radio"
              value="scribble"
              checked={disguiseType === 'scribble'}
              onChange={handleDisguiseChange}
            />
            Scribble
          </label>
          <label>
            <input
              type="radio"
              value="fullColor"
              checked={disguiseType === 'fullColor'}
              onChange={handleDisguiseChange}
            />
            Full Color Modification
          </label>
        </div>
        <button onClick={applyDisguise}>Apply Disguise</button>
        <button onClick={handleSubmit}>Submit</button>
        <button className="crack" onClick={handleCrackPassword}>Crack Password</button>
      
          <button onClick={handleMoreInfoToggle}>More Info</button>
          {showMoreInfo && (
            <div>
              {disguiseType === 'blur' && <p>Gaussian Blur: This filter applies a blur effect to the entire image, making it less recognizable.</p>}
              {disguiseType === 'scribble' && <p>Scribble: This option adds random scribbles over the image to obscure the details.</p>}
              {disguiseType === 'fullColor' && <p>Full Color Modification: This option changes the color of the entire image, making it look completely different.</p>}
            </div>
          )}
      </div>
      <canvas ref={disguisedImageCanvasRef} className="image" id="disguisedImageCanvas" style={{ display: showMainContainer ? 'none' : 'block' }}></canvas>

   {/*    <div> <div> <img src="agent1.jpg" className="agent-image" onClick={() => selectAgent('Agent 1')} alt="Agent 1" /> 
      <img src="agent2.jpg" className="agent-image" onClick={() => selectAgent('Agent 2')} alt="Agent 2" /> </div>
       {showAgentPopup && ( <div className="popup" id="agentPopup"> <p id="agentMessage">{agentMessage}</p>
        <button onClick={closePopup}>Close</button> </div> )} <div>
           <input type="password" id="passwordInput" placeholder="Enter password" />
            <button onClick={checkPassword}>Submit</button> </div> 
            {showPasswordPopup && ( 
              <div className="popup" id="passwordPopup"> 
              <p id="passwordMessage">{passwordMessage}</p>
               <button onClick={closePopup}>Close</button> </div> 
              )} </div> */}
              
              </div>
  );
};

export default DisguisePlayer;
