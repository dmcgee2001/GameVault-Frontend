/* eslint-disable react/prop-types */
export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };

  return (
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
  );
}
