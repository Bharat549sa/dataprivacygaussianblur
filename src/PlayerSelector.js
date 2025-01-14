// PlayerSelector.js
//
import React, { useState } from "react";

const PlayerSelector = ({ players, onSelection }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleImageClick = (player) => {
    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p !== player));
    } else if (selectedPlayers.length < 5) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };
  const handleSubmit = () => {
    onSelection(selectedPlayers);
  };
  
  return (
    <div>
      {" "}
      <h2>Select Players</h2>{" "}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {players.map((player, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <img
              src={player.src}
              alt={player.name}
              style={{
                border: selectedPlayers.includes(player)
                  ? "2px solid blue"
                  : "2px solid transparent",
                cursor: "pointer",
                width: "100px",
                height: "100px",
              }}
              onClick={() => handleImageClick(player)}
            />{" "}
            <p>{player.name}</p>{" "}
          </div>
        ))}{" "}
      </div>
      <button onClick={handleSubmit}>Submit</button>{" "}
    </div>
  );
};
export default PlayerSelector;
