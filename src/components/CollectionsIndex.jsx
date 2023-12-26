/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function CollectionsIndex({ collections, onDestroyCollection }) {
  const handleClick = (collectionId) => {
    onDestroyCollection(collectionId);
  };
  return (
    <div>
      <h1 className="mt-4 mb-3">Your Vault</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {collections.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100">
              <Link to={`/games/${item.game.id}`} className="text-decoration-none">
                <img
                  src={item.game.background_image}
                  className="card-img-top"
                  alt={item.game.name}
                  style={{ objectFit: "cover", height: "200px", width: "100%", aspectRatio: "16/9" }}
                />
              </Link>
              <div className="card-body">
                <Link to={`/games/${item.game.id}`} className="text-decoration-none">
                  <h5 className="card-title">{item.game.name}</h5>
                </Link>
                <p className="card-text">Released: {item.game.released}</p>
                <button
                  onClick={() => handleClick(item.id)}
                  className="btn btn-sm btn-danger position-absolute bottom-0 end-0 m-3"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-4 d-flex justify-content-end align-items-end"></div>
    </div>
  );
}
