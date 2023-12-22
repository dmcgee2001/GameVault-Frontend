/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function GamesNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Add a Game to Our Library</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input name="name" type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="background_image" className="form-label">
                    Image URL:
                  </label>
                  <input name="background_image" type="text" className="form-control" id="background_image" />
                </div>
                <div className="mb-3">
                  <label htmlFor="released" className="form-label">
                    Released (Date):
                  </label>
                  <input name="released" type="text" className="form-control" id="released" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input name="description" type="text" className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-danger">
                  Add Game
                </button>
              </form>
              <div className="text-end mt-3">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
