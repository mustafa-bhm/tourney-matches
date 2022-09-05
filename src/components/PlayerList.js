// import playerData from "../data/playerData";
// import matchData from "../data/matchData";
import Player from "./Player";
// import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  // const onePlayer = props.playerData[0];
  const players = props.playerData.map((player) => {
    return (
      <Player
        key={player.gamerTag}
        firstName={player.firstName}
        gamerTag={player.gamerTag}
        lastName={player.lastName}
        wins={player.wins}
      />
    );
  });
  return (
    <section className="PlayerList">
      <h1> Current Participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;
