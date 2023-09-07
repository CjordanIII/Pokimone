const React = require('react')

function Index(props){
    const {pokemon} = props
    console.log(pokemon)
    return(<div>
        <h1>Index</h1>
    </div>)
}

module.exports = Index