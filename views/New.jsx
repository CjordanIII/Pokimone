const React = require("react");

function New() {
  return (
    <div>
      <h1>New</h1>
      <form action="/pokemon" method="POST">
        <label htmlFor="name">Pokemon:</label>
        <input type="text" name="name" required />
        <br />
        <label htmlFor="img">Image:</label>
        <input type="text" name="img" required />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

module.exports = New;
