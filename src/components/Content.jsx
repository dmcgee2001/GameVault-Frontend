import axios from "axios";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";

export function Content() {
  const [games, setGames] = useState([]);

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };

  useEffect(handleIndexGames, []);

  return (
    <div>
      <GamesIndex games={games} />
    </div>
  );
}
