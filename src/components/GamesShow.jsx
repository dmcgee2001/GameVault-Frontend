import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function GamesShow() {
  const [game, setGame] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const handleShowGame = () => {
    axios.get(`http://localhost:3000/games/${params.id}.json`).then((response) => {
      setGame(response.data);
    });
  };

  useEffect(handleShowGame, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div id="games-show">
            <h1 className="text-center mb-4">Game Info</h1>
            <div className="text-center">
              <img src={game.background_image} alt={game.name} className="img-fluid rounded" />
            </div>
            <h2 className="mt-4">{game.name}</h2>
            <p>
              <strong>Released:</strong> {game.released}
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <p>{game.description}</p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
