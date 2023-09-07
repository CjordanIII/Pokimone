const React = require('react')

function Index(props){
    const {pokemon} = props

    return (
      <div>
        <h1>Pokemon</h1>
        <nav>
          <a href="/pokemon/new">New Pokemon</a>
        </nav>
        <ul>
          {pokemon.map((poki, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/show/${i}`}>{poki.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

module.exports = Index