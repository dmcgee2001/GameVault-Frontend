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
    <>
      <div>
        <h1>New Game</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input name="name" type="text" />
          </div>
          <div>
            Image URL: <input name="background_image" type="text" />
          </div>
          <div>
            Released (Date): <input name="released" type="text" />
          </div>
          <div>
            Description: <input name="description" type="text" />
          </div>
          <button type="submit">Create Game</button>
        </form>
      </div>
      <div className="col-md-4 d-flex justify-content-end align-items-end">
        <div className="text-right mb-4">
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
}
