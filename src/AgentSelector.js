import React, { useState } from 'react'; import './styles.css'; 
const AgentSelector = () => { 
  const [showPopup, setShowPopup] = useState(false);
  const [agentMessage, setAgentMessage] = useState(''); 
const [showAgentPopup, setShowAgentPopup] = useState(false); 
const [passwordMessage, setPasswordMessage] = useState('');
 const [showPasswordPopup, setShowPasswordPopup] = useState(false); 
 const [originalPassword] = useState('yourOriginalPassword');
 const [showPlayerSelector, setShowPlayerSelector] = useState(false); 
 const [popupMessage, setPopupMessage] = useState('');
 const [selectedPlayers, setSelectedPlayers] = useState([]); 
 const [currentPlayer, setCurrentPlayer] = useState(null); 
 const savedPassword = 'yourPassword';

//   const selectAgent = (agent) => { 
//     setAgentMessage(`Do you want to select ${agent} as your agent?`); 
//   setShowAgentPopup(true); }; 

//   const closePopup = () => { 
//     setShowAgentPopup(false); setShowPasswordPopup(false); }; 


//     const checkPassword = () => {
        
//         const enteredPassword = document.getElementById('passwordInput').value;
        
//         if (enteredPassword === originalPassword) { setPasswordMessage('Password is correct!'); } 
        
//         else { setPasswordMessage('Password is incorrect!'); } setShowPasswordPopup(true);
      
//       };


//         const Players=  [ { name: 'Player 1', src: 'images/personel/1.jpg'},
//           { name: 'Player 2', src: 'images/personel/1 (2).jpg' },
//            { name: 'Player 3', src: 'images/personel/2 (2).jpg' },
//             { name: 'Player 4', src: 'images/personel/3.jpg' }, 
//             { name: 'Player 5', src: 'images/personel/4.jpg' }, 
//             { name: 'Player 6', src: 'images/personel/4 (2).jpg' } ];

//             const handleSelection = (selectedPlayers) => { 
//               setSelectedPlayers(selectedPlayers); 
//               setCurrentPlayer(selectedPlayers[0]);
              
//             };


//             const handleStartClick = () => { 
//               setShowPlayerSelector(true);
//              };


//              const handleImageClick = () => { 
//               setPopupMessage('Do you want to select this as an agent?'); 
//               setShowPopup(true); };


//             const handlePasswordCheck = () => { 
//               const userInput = prompt('Enter the password:'); 
//               if (userInput === savedPassword) {
//                  setPopupMessage('Correct password!'); } else {
//                    setPopupMessage('Incorrect password!'); } 
//                    setShowPopup(true); };
//             //  const closePopup = () => { 
//             //   setShowPopup(false);  
          
//         return ( /* <div> 
//             <div>

      
//              <img src="images/personel/1.jpg" className="agent-image" onClick={() => selectAgent('Agent 1')} alt="Agent 1" />
//               <img src="images/personel/1 (2).jpg" className="agent-image" onClick={() => selectAgent('Agent 2')} alt="Agent 2" /> </div> 
//               {showPlayerSelector && ( <PlayerSelector players={players} onSelection={handleSelection} /> )}
//               {showAgentPopup && ( <div className="popup" id="agentPopup"> <p id="agentMessage">{agentMessage}</p>
//                <button onClick={closePopup}>Close</button> </div> )} <div> 
//                 <input type="password" id="passwordInput" placeholder="Enter password" /> 
//                 <button onClick={checkPassword}>Submit</button> </div>
                
//                  {showPasswordPopup && (
//                      <div className="popup" id="passwordPopup"> 
//                     <p id="passwordMessage">{passwordMessage}</p>
//  <button onClick={closePopup}>Close</button> 
//  </div>

// )} 
 
//  </div> */

// <div> 
//   <div> 
// {/*   <img src="images/personel/1.jpg" className="agent-image" onClick={() => handleImageClick('Agent 1')} alt="Agent 1" />
//  <img src="images/personel/1 (2).jpg" className="agent-image" onClick={() => handleImageClick('Agent 2')} alt="Agent 2" /> */} 
//  <img src="images/personel/1.jpg" className="agent-image" onClick={() => selectAgent('Agent 1')} alt="Agent 1" />
//   <img src="images/personel/1 (2).jpg" className="agent-image" onClick={() => selectAgent('Agent 2')} alt="Agent 2" />
//  </div>
//   {showPlayerSelector && (
//      <PlayerSelector players={players} onSelection={handleSelection} />
//  )} 
//   {showAgentPopup && (
//      <div className="popup" id="agentPopup">
//     <p id="agentMessage">{agentMessage}</p> 
 
//   <button onClick={closePopup}>Close</button> 
//   </div>

// )} 
//   <div> 
    
//     <input type="password" id="passwordInput" placeholder="Enter password" />
//    <button onClick={handlePasswordCheck}>Submit</button>
   
//     </div>
//     {showPasswordPopup && ( 
//       <div className="popup" id="passwordPopup"> 
//     <p id="passwordMessage">{passwordMessage}</p> 
// <button onClick={closePopup}>Close</button>
//  </div>

// )} </div>
// ); 
 
// }; 
 
//  export default AgentSelector 

const handleImageClick = (agent) => {
  
  setPopupMessage(`Do you want to select ${agent} as an agent?`); 
setShowPopup(true); 
}; 

const handlePasswordCheck = () => { 
  const userInput = prompt('Enter the password:'); 
  if (userInput === savedPassword) { setPopupMessage('Correct password!'); 

  } else { setPopupMessage('Incorrect password!'); } 
  
  setShowPopup(true); };


  
   const closePopup = () => { setShowPopup(false); }; 


   const selectAgent = (agent) => {
     setAgentMessage(`Do you want to select ${agent} as your agent?`); 
     setShowAgentPopup(true); };
     
     return ( <div> <div> 
      
      <img src="images/personel/1.jpg" className="agent-image" onClick={() => selectAgent('Agent 1')} alt="Agent 1" /> 
      
      <img src="images/personel/1 (2).jpg" className="agent-image" onClick={() => selectAgent('Agent 2')} alt="Agent 2" /> 
      </div> {showPlayerSelector && ( 
        
        <PlayerSelector players={players} onSelection={handleSelection} /> )}
        
         {showAgentPopup && (
          
          <div className="popup" id="agentPopup"> <p id="agentMessage">{agentMessage}</p> 
          
          <button onClick={closePopup}>Close</button> </div> )} <div> <input type="password" id="passwordInput" placeholder="Enter password" />
          
           <button onClick={handlePasswordCheck}>Submit</button> </div> 
           {showPasswordPopup && (
             <div className="popup" id="passwordPopup"> <p id="passwordMessage">{passwordMessage}</p> 
<button onClick={closePopup}>Close</button> </div> )} </div> 

); }; 

export default AgentSelector;