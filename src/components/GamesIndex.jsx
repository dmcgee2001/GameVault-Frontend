import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export function GamesIndex({ games, currentPage, itemsPerPage }) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = games.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="mt-4 mb-3">All Games</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentGames.map((game) => (
          <div key={game.id} className="col">
            <Link to={`/games/${game.id}`} className="text-decoration-none">
              <div className="card h-100">
                <img src={game.background_image} className="card-img-top" alt={game.name} />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">Released: {game.released}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
