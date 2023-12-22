/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function CollectionsIndex({ collection }) {
  return (
    <div>
      <h1 className="mt-4 mb-3">Your Games</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {collection.map((item) => (
          <div key={item.id} className="col">
            <Link to={`/games/${item.game.id}`} className="text-decoration-none">
              <div className="card h-100">
                <img
                  src={item.game.background_image}
                  className="card-img-top"
                  alt={item.game.name}
                  style={{ objectFit: "cover", height: "200px", width: "100%", aspectRatio: "16/9" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.game.name}</h5>
                  <p className="card-text">Released: {item.game.released}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="col-md-4 d-flex justify-content-end align-items-end"></div>
    </div>
  );
}
