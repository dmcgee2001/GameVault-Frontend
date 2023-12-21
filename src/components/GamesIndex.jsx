/* eslint-disable react/prop-types */
export function GamesIndex(props) {
  return (
    <div>
      <h1>All games</h1>
      {props.games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.background_image} />
          <p>Released: {game.released}</p>
        </div>
      ))}
    </div>
  );
}
