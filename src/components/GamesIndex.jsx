/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function GamesIndex({ games, currentPage, itemsPerPage }) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedGames = games.sort((a, b) => a.id - b.id);
  const currentGames = sortedGames.slice(startIndex, endIndex);

  return (
    <div className="container mt-5">
      <div className="intro-section mb-5">
        <h1 className="mb-4">Welcome to GameVault</h1>
        <p className="lead">
          Discover, organize, and explore your favorite games with GameVault. Our platform offers an extensive
          collection of games from various genres and platforms. Whether you're a passionate gamer or simply looking for
          your next gaming adventure, GameVault provides a comprehensive library where you can find information about
          trending games, create your personalized collections, and connect with fellow gaming enthusiasts.
        </p>
        <p className="lead">
          Start building your virtual game collection, share your experiences, and dive into the world of gaming like
          never before with GameVault!
        </p>
      </div>

      <h2 className="mb-4">All Games</h2>
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

      <div className="row justify-content-end mt-4">
        <div className="col-md-4 text-right">
          <Link to="/games/new" className="btn btn-danger">
            Don't see your favorite game? Click here!
          </Link>
        </div>
      </div>
    </div>
  );
}
