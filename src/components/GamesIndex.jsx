/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function GamesIndex({ games, currentPage, itemsPerPage }) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedGames = games.sort((a, b) => a.id - b.id);
  const currentGames = sortedGames.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="mt-4 mb-3">All Games</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentGames.map((game) => (
          <div key={game.id} className="col">
            <Link to={`/games/${game.id}`} className="text-decoration-none">
              <div className="card h-100">
                <img
                  src={game.background_image}
                  className="card-img-top"
                  alt={game.name}
                  style={{ objectFit: "cover", height: "200px", width: "100%", aspectRatio: "16/9" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">Released: {game.released}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="col-md-4 d-flex justify-content-end align-items-end">
        <div className="text-right mb-4">
          <Link to="/games/new">Don't see your favorite game? Click here!</Link>
        </div>
      </div>
    </div>
  );
}
