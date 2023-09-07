const React = require("react");

function Show(props) {
  const { pokemon, ids } = props;
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>

      <h2>
        {pokemon[ids].name.charAt(0).toUpperCase() + pokemon[ids].name.slice(1)}
      </h2>
      <img src={`${pokemon[ids].img}.jpg`}></img>
    </div>
  );
}

module.exports = Show;