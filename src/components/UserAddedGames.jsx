/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function UserAddedGames(props) {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGame(selectedGame.id, params);
    event.target.reset();
    window.location.reload();
  };

  const handleEdit = (game) => {
    setSelectedGame(game);
    console.log("selected game", selectedGame);
    const modal = document.getElementById("updateModal");
    if (modal) {
      modal.classList.add("show");
      modal.style.display = "block";
    }
  };
  return (
    <>
      <h2 className="mb-4">All Games</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.games.map((game) => (
          <div key={game.id} className="col">
            <div className="card h-100">
              <Link to={`/games/${game.id}`} className="text-decoration-none">
                <img
                  src={game.background_image}
                  className="card-img-top"
                  alt={game.name}
                  style={{ objectFit: "cover", height: "200px", width: "100%", aspectRatio: "16/9" }}
                />
              </Link>
              <div className="card-body">
                <Link to={`/games/${game.id}`} className="text-decoration-none">
                  <h5 className="card-title">{game.name}</h5>
                </Link>
                <p className="card-text">Released: {game.released}</p>
                <button
                  onClick={() => handleEdit(game)}
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                  className="btn btn-sm btn-primary position-absolute bottom-0 end-0 m-3"
                >
                  Edit
                </button>
                {/* Modal */}
                <div className="modal" id="updateModal" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label name="name" className="form-label">
                              Name:
                            </label>
                            <input name="name" className="form-control" defaultValue={selectedGame.name} />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Released (Date):</label>
                            <input name="released" className="form-control" defaultValue={selectedGame.released} />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Image URL:</label>
                            <input
                              name="background_image"
                              className="form-control"
                              defaultValue={selectedGame.background_image}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <input
                              name="description"
                              className="form-control"
                              defaultValue={selectedGame.description}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>{" "}
                          <button onClick={() => props.onDestroyGame(selectedGame)} className="btn btn-danger">
                            Delete
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
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
