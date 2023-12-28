/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function UserAddedGames(props) {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="mb-4">All Games</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.games.map((game) => (
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
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Go back
          </button>{" "}
          <Link to="/games/new" className="btn btn-primary">
            Add Another Game to our Library
          </Link>
        </div>
      </div>
    </>
  );
}
