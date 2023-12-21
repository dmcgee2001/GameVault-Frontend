/* eslint-disable react/prop-types */
export function GamesIndex({ games, currentPage, itemsPerPage }) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = games.slice(startIndex, endIndex);

  return (
    <div>
      <h1>All games</h1>
      {currentGames.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} />
          <p>Released: {game.released}</p>
        </div>
      ))}
    </div>
  );
}
