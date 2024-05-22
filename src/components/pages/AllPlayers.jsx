import { useSelector } from "react-redux";
import SinglePlayer from "./SinglePlayer";
import { Link } from "react-router-dom";

function AllPlayers() {
  const playersList = useSelector((state) => state.players);

  console.log(playersList.data.players);

  return (
    <>
      <div className="playersWrapper">
        {playersList.data.players.map((item) => (
          <Link key={item.id} to={"players/" + item.id}>
            <div key={item.id} className="playerContainer">
              <h2>{item.name}</h2>
              <img src={item.imageUrl} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default AllPlayers;
