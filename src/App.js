import Pacman from "react-pacman";
import { useEffect, useState } from "react";
import "./styles.css";
import PlayerSelector from './PlayerSelector';
import DisguisePlayer from './DisguisePlayer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NextPage from './NextPage';

export default function App() {
/*   const [gameKey, setGameKey] = useState(0); // Unique key to remount the Pacman component
  const [isGameOver, setIsGameOver] = useState(false); // State to track if the game is over

  // Function to reset the game
  const resetGame = () => {
    setIsGameOver(false);
    setGameKey((prevKey) => prevKey + 1); // Change key to remount component
  }; */
  const [showPlayerSelector, setShowPlayerSelector] = useState(false); 
  const [selectedPlayers, setSelectedPlayers] = useState([]); 
  const [currentPlayer, setCurrentPlayer] = useState(null); 
  const [showDisguisePlayer, setShowDisguisePlayer] = useState(false); 
  const players = [ { name: 'Player 1', src: 'images/personel/1.jpg'},
     { name: 'Player 2', src: 'images/personel/1 (2).jpg' },
      { name: 'Player 3', src: 'images/personel/2 (2).jpg' },
       { name: 'Player 4', src: 'images/personel/3.jpg' }, 
       { name: 'Player 5', src: 'images/personel/4.jpg' }, 
       { name: 'Player 6', src: 'images/personel/4 (2).jpg' } ];
        const handleSelection = (selectedPlayers) => { 
          setSelectedPlayers(selectedPlayers); 
          setCurrentPlayer(selectedPlayers[0]);
           setShowDisguisePlayer(true);
        };
        const handleDisguise = (disguisedImage) => { 
          console.log('Disguised Image:', disguisedImage);}
           // You can handle the disguised image as needed }; 
        const handleStartClick = () => { 
          setShowPlayerSelector(true);
         };
  // This useEffect would simulate game over; you can replace this with your actual logic
  /* useEffect(() => {
    if (isGameOver) {
      const timer = setTimeout(() => {
        resetGame();
      }, 1000); // Delay before restarting the game
      return () => clearTimeout(timer);
    }
  }, [isGameOver]);

  // Function to simulate game ending
  const handleSimulateGameEnd = () => {
    setIsGameOver(true); // Set game as over
  }; */
 
  return (
    <div className="App">
      <header className="App-header"> <h1>Player Selector and Disguise</h1>
       {!showPlayerSelector && (
         <button onClick={handleStartClick}>
        Start</button> )} 

      
        {showPlayerSelector && !showDisguisePlayer && ( <PlayerSelector players={players} onSelection={handleSelection} /> )}
         {showDisguisePlayer && currentPlayer && ( <DisguisePlayer player={currentPlayer} onDisguise={handleDisguise} /> )} 
      </header>
      <AgentSelector />
      {showPlayerSelector && !showDisguisePlayer && ( <PlayerSelector players={players} onSelection={handleSelection} /> )}
     {/*  <body> <div> <img src="agent1.jpg" class="agent-image" onclick="selectAgent('Agent 1')"> 
      <img src="agent2.jpg" class="agent-image" onclick="selectAgent('Agent 2')"> 
      </div> <div class="popup" id="agentPopup"> <p id="agentMessage"></p> <button onclick="closePopup()">Close</button> </div>
       <div> <input type="password" id="passwordInput" placeholder="Enter password"> <button onclick="checkPassword()">Submit</button>
       
        </div> <div class="popup" id="passwordPopup"> <p id="passwordMessage"></p> <button onclick="closePopup()">Close</button> </div> <script>
          
           function selectAgent(agent) { document.getElementById('agentMessage').innerText = `Do you want to select ${agent} as your agent?`;
            document.getElementById('agentPopup').style.display = 'block'; } function closePopup() { document.getElementById('agentPopup').style.display = 'none';
               document.getElementById('passwordPopup').style.display = 'none'; } function checkPassword() { const originalPassword = 'yourOriginalPassword'; const enteredPassword = document.getElementById('passwordInput').value; if (enteredPassword === originalPassword) { document.getElementById('passwordMessage').innerText = 'Password is correct!'; } else { document.getElementById('passwordMessage').innerText = 'Password is incorrect!'; } document.getElementById('passwordPopup').style.display = 'block'; }
       </script>
       </body> */}

  { /* <Router> <div className="App">
     <Switch>
       <Route exact path="/" component={Home} />
   <Route path="/NextPage" component={NextPage} /> 

   </Switch>
    </div> </Router>  */}
    </div>
  );
};

/* function applyGaussianBlur(ctx, width, height) { const imageData = ctx.getImageData(0, 0, width, height); 
  const data = imageData.data; const kernel = [ [1, 4, 7, 4, 1], [4, 16, 26, 16, 4], [7, 26, 41, 26, 7], [4, 16, 26, 16, 4], [1, 4, 7, 4, 1] ];
   const kernelSize = 5; const kernelSum = 273; const applyKernel = (x, y) => { let r = 0, g = 0, b = 0; for (let ky = 0; ky < kernelSize; ky++) { for (let kx = 0; kx < kernelSize; kx++) { const px = (x + kx - 2) * 4; const py = (y + ky - 2) * width * 4; 
    const weight = kernel[ky][kx]; r += data[px + py] * weight; g += data[px + py + 1] * weight; b += data[px + py + 2] * weight; } } 
    
    return [r / kernelSum, g / kernelSum, b / kernelSum]; }; for (let y = 2; y < height - 2; y++) { for (let x = 2; x < width - 2; x++) { const [r, g, b] = applyKernel(x, y); const index = (x + y * width) * 4; data[index] = r; data[index + 1] = g; data[index + 2] = b; } }
     ctx.putImageData(imageData, 0, 0); }
 */
