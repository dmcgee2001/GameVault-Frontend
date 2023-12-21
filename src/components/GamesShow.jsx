import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function GamesShowPage() {
  const [game, setGame] = useState({});
  const params = useParams();

  const handleShowGame = () => {
    axios.get(`http://localhost:3000/games/${params.id}.json`).then((response) => {
      setGame(response.data);
    });
  };

  useEffect(handleShowGame, []);

  return (
    <div id="games-show">
      <h1> Game Info</h1>
      <img>{game.background_image}</img>
      <h2>{game.name}</h2>
      <p>{game.released}</p>
      <p>{game.description}</p>
    </div>
  );
}
