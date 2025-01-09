import React, { useState } from 'react'; import './styles.css'; 
const AgentSelector = () => { const [agentMessage, setAgentMessage] = useState(''); 
const [showAgentPopup, setShowAgentPopup] = useState(false); 
const [passwordMessage, setPasswordMessage] = useState('');
 const [showPasswordPopup, setShowPasswordPopup] = useState(false); 
 const [originalPassword] = useState('yourOriginalPassword');

  const selectAgent = (agent) => { 
    setAgentMessage(`Do you want to select ${agent} as your agent?`); 
  setShowAgentPopup(true); }; 

  const closePopup = () => { 
    setShowAgentPopup(false); setShowPasswordPopup(false); }; 


    const checkPassword = () => {
        
        const enteredPassword = document.getElementById('passwordInput').value;
        
        if (enteredPassword === originalPassword) { setPasswordMessage('Password is correct!'); } 
        
        else { setPasswordMessage('Password is incorrect!'); } setShowPasswordPopup(true); };
        
        return ( <div> 
            <div>
             <img src="agent1.jpg" className="agent-image" onClick={() => selectAgent('Agent 1')} alt="Agent 1" />
              <img src="agent2.jpg" className="agent-image" onClick={() => selectAgent('Agent 2')} alt="Agent 2" /> </div> 
              {showAgentPopup && ( <div className="popup" id="agentPopup"> <p id="agentMessage">{agentMessage}</p>
               <button onClick={closePopup}>Close</button> </div> )} <div> 
                <input type="password" id="passwordInput" placeholder="Enter password" /> 
                <button onClick={checkPassword}>Submit</button> </div>
                
                 {showPasswordPopup && (
                     <div className="popup" id="passwordPopup"> 
                    <p id="passwordMessage">{passwordMessage}</p>
 <button onClick={closePopup}>Close</button> 
 </div>

)} 
 
 </div> ); 
 
}; 
 
 export default AgentSelector 