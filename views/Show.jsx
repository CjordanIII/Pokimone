const React = require("react");

function Show(props) {
  const { pokemonFromDb } = props;
  console.log(pokemonFromDb);
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>

      <h2>
        {pokemonFromDb.name.charAt(0).toUpperCase() +
          pokemonFromDb.name.slice(1)}
      </h2>
      <img src={`${pokemonFromDb.img}.jpg`}></img>
    </div>
  );
}

module.exports = Show;