import axios from "axios";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

export function Content() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };

  const handleCreateGame = (params, successCallback) => {
    console.log("handleCreateGame", params);
    axios.post("http://localhost:3000/games.json", params).then((response) => {
      setGames([...games, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexGames, [currentPage]);

  const totalPages = Math.ceil(games.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  const renderPagination = () => {
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
      <div>
        {currentPage > 0 && <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => handlePageChange(startPage + index)}
            disabled={currentPage === startPage + index}
          >
            {startPage + index + 1}
          </button>
        ))}
        {currentPage < totalPages - 1 && <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
      </div>
    );
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<GamesIndex games={games} currentPage={currentPage} itemsPerPage={itemsPerPage} />} />
        <Route path="/games/new" element={<GamesNew onCreateGame={handleCreateGame} />} />
      </Routes>
      {renderPagination()}
    </div>
  );
}
