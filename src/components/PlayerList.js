// import playerData from "../data/playerData";
// import matchData from "../data/matchData";
import Player from "./Player";
// import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  const onePlayer = props.playerData[0];
  return (
    <section className="PlayerList">
      <h1> Current Participating players</h1>
      <Player
        firstName={onePlayer.firstName}
        gamerTag={onePlayer.gamerTag}
        lastName={onePlayer.lastName}
        wins={onePlayer.wins}
      />
    </section>
  );
}

export default PlayerList;
