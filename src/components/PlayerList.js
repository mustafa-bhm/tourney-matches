import playerData from "../data/playerData";
import matchData from "../data/matchData";
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className="PlayerList">
      <h1> Current Participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;
