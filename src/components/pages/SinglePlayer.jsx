import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import { useState } from "react";

function SinglePlayer() {
  const playerList = useSelector((state) => state.players.data.players);
  const params = useParams();
  const id = parseInt(params.id);
  const clickedPlayer = playerList.find((player) => player.id === id);

  console.log(playerList);

  console.log(params);
  console.log(id);

  console.log(clickedPlayer);

  return (
    <div className="singlePlayerWrapper">
      <div key={clickedPlayer.id} className="singlePlayerContainer">
        <h2>{clickedPlayer.name}</h2>
        <p>{clickedPlayer.breed}</p>
        <p>Status: {clickedPlayer.status}</p>

        <img src={clickedPlayer.imageUrl} />
      </div>
    </div>
  );
}

export default SinglePlayer;
