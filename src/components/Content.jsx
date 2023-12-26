import axios from "axios";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { GamesShow } from "./GamesShow";
import { CollectionsIndex } from "./CollectionsIndex";

export function Content() {
  const [games, setGames] = useState([]);
  const [collection, setCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };
  const handleIndexCollections = () => {
    console.log("handleindexcollections");
    axios.get("http://localhost:3000/collections.json").then((response) => {
      console.log(response.data);
      setCollection(response.data);
    });
  };

  const handleCreateGame = (params, successCallback) => {
    console.log("handleCreateGame", params);
    axios.post("http://localhost:3000/games.json", params).then((response) => {
      setGames([...games, response.data]);
      successCallback();
    });
  };
  const handleCreateCollection = (params, successCallback) => {
    console.log("handleCreateCollection", params);
    axios.post("http://localhost:3000/collections.json", params).then((response) => {
      setCollection([...collection, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexGames, [currentPage]);
  useEffect(handleIndexCollections, []);

  const totalPages = Math.ceil(games.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  const GamesIndexPagination = () => {
    const maxVisibleButtons = 5;
    let startPage = Math.max(0, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisibleButtons - 1);

    if (totalPages <= maxVisibleButtons) {
      startPage = 0;
      endPage = totalPages - 1;
    } else if (currentPage <= Math.floor(maxVisibleButtons / 2)) {
      endPage = maxVisibleButtons - 1;
    } else if (currentPage >= totalPages - Math.floor(maxVisibleButtons / 2)) {
      startPage = totalPages - maxVisibleButtons;
      endPage = totalPages - 1;
    }

    return (
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-danger mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            className={`btn ${currentPage === startPage + index ? "btn-danger" : "btn-secondary"} mx-1`}
            onClick={() => handlePageChange(startPage + index)}
          >
            {startPage + index + 1}
          </button>
        ))}
        <button
          className="btn btn-danger ml-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="container d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<GamesIndex games={games} currentPage={currentPage} itemsPerPage={itemsPerPage} />} />
        <Route path="/games/new" element={<GamesNew onCreateGame={handleCreateGame} />} />
        <Route path="/games/:id" element={<GamesShow onCreateCollection={handleCreateCollection} />} />
        <Route path="/collection" element={<CollectionsIndex collection={collection} />} />
      </Routes>
      <div className="mt-auto"></div>
      {location.pathname === "/" && (
        <GamesIndexPagination
          games={games}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          navigate={navigate}
        />
      )}
    </div>
  );
}
